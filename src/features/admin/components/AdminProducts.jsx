import { useState } from "react";
import { toast } from "sonner";
import { useProduct } from "../../products/contexts/ProductContext";

function AdminProducts() {
  const [file, setFile] = useState(null);
  const [productId, setProductId] = useState("");
  const [uploading, setUploading] = useState(false);
  const { uploadProductImage } = useProduct();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleFormData = () => {
    const formData = new FormData();
    formData.append("image", file);
    return formData;
  };

  const handleSubmit = async () => {
    if (!file || productId === "") {
      toast.error("Please provide both a file and product id");
      return;
    }

    if (isNaN(productId)) {
      toast.error("Product id must be a number");
      return;
    }

    setUploading(true);
    console.log(
      file,
      productId,
      "upload data from admin products component********************"
    );
    try {
      const data = handleFormData();
      const response = await uploadProductImage(productId, data);
      console.log(response, "response from admin products component");
      setUploading(false);
      toast.success("Image uploaded successfully");
      setFile(null);
    } catch (error) {
      setUploading(false);
      console.log(error, "error from admin products component");
      toast.error("Error uploading image");
    }
  };

  return (
    <div className="flex justify-between items-center w-full glass p-4 border-2 ">
      <div className="border-2 border-primary">
        <input
          onChange={handleFileChange}
          className="p-2 bg-transparent text-black"
          type="file"
          name="image"
        ></input>
        <input
          onChange={handleProductIdChange}
          className=" p-3  bg-transparent text-black"
          type="text"
          placeholder="Product id"
          value={productId}
        ></input>
      </div>
      {uploading ? (
        <span className="loading loading-ring loading-lg text-primary"></span>
      ) : (
        <button className="btn btn-primary" onClick={handleSubmit}>
          UPLOAD
        </button>
      )}
    </div>
  );
}

export default AdminProducts;

