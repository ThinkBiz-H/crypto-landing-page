import { useState, useRef } from "react";
import {
  MessageCircle,
  AlertCircle,
  Upload,
  X,
  FileImage,
} from "lucide-react";
import { z } from "zod";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const experienceLevels = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const idTypes = [
  { value: "passport", label: "Passport" },
  { value: "driving_license", label: "Driving License" },
  { value: "photo_id", label: "Photo ID Card" },
];

/* ✅ UPDATED VALIDATION */
const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  mobile: z.string().min(10, "Mobile number required"),

  investmentAmount: z
    .coerce
    .number()
    .min(1000, "Minimum investment amount is 1000 CAD"),

  experience: z.string().min(1, "Select experience"),
  idType: z.string().min(1, "Select ID type"),
});

const InvestmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    investmentAmount: "",
    experience: "",
    idType: "",
  });

  const [idFile, setIdFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef(null);

  /* ------------------ HANDLERS ------------------ */

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      toast.error("Please upload JPG or PNG image");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error("File size must be under 10MB");
      return;
    }

    setIdFile(file);
  };

  const removeFile = () => {
    setIdFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /* ------------------ CLOUDINARY ------------------ */

  const uploadToCloudinary = async () => {
    const data = new FormData();
    data.append("file", idFile);
    data.append("upload_preset", "crypto");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcotvv2ek/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    if (!result.secure_url) throw new Error("Upload failed");
    return result.secure_url;
  };

  /* ------------------ SUBMIT ------------------ */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const parsed = formSchema.safeParse(formData);
    if (!parsed.success) {
      parsed.error.errors.forEach((err) => {
        toast.error(err.message);
      });
      return;
    }

    if (!idFile) {
      toast.error("Please upload your ID document");
      return;
    }

    setIsSubmitting(true);

    try {
      const imageUrl = await uploadToCloudinary();

      const experienceLabel =
        experienceLevels.find((e) => e.value === formData.experience)?.label;
      const idTypeLabel =
        idTypes.find((i) => i.value === formData.idType)?.label;

      const message = `
Hi, I'm interested in crypto investment.

*My Details:*
• Name: ${formData.fullName}
• Email: ${formData.email}
• Mobile: ${formData.mobile}
• Investment Amount: CAD ${formData.investmentAmount}
• Crypto Experience: ${experienceLabel}

*ID Verification:*
• ID Type: ${idTypeLabel}
• ID Image Link:
${imageUrl}

Please get in touch with me.
      `.trim();

      toast.success(
        "Form submitted successfully! Redirecting to WhatsApp..."
      );

      setTimeout(() => {
        window.open(
          `https://wa.me/918512001218?text=${encodeURIComponent(message)}`,
          "_blank"
        );
      }, 1500);
    } catch (err) {
      toast.error("Image upload failed. Try again.");
    }

    setIsSubmitting(false);
  };

  /* ------------------ UI ------------------ */

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <section id="invest" className="section-padding bg-secondary">
        <div className="container-tight">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="card-elevated space-y-6">
              <input
                name="fullName"
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border"
              />

              <input
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border"
              />

              <input
                name="mobile"
                onChange={handleChange}
                placeholder="Mobile"
                className="w-full px-4 py-3 rounded-xl border"
              />

              <input
                name="investmentAmount"
                type="number"
                min="1000"
                onChange={handleChange}
                placeholder="Investment Amount (Min 1000 CAD)"
                className="w-full px-4 py-3 rounded-xl border"
              />

              <select
                name="experience"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border"
              >
                <option value="">Select Experience</option>
                {experienceLevels.map((e) => (
                  <option key={e.value} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>

              <select
                name="idType"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border"
              >
                <option value="">Select ID Type</option>
                {idTypes.map((i) => (
                  <option key={i.value} value={i.value}>
                    {i.label}
                  </option>
                ))}
              </select>

              {formData.idType && (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed rounded-xl p-6 text-center cursor-pointer"
                >
                  {idFile ? (
                    <div className="flex justify-center items-center gap-2">
                      <FileImage className="w-5 h-5" />
                      {idFile.name}
                      <X onClick={removeFile} className="w-4 h-4 cursor-pointer" />
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto mb-2" />
                      Click to upload your ID
                    </>
                  )}
                  <input
                    type="file"
                    hidden
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>
              )}

              <button
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold flex justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {isSubmitting ? "Processing..." : "Submit & Chat on WhatsApp"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestmentForm;
