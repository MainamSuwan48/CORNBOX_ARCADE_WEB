import React from "react";

function AdminProducts() {
  const [file, setFile] = React.useState([]);
  const [productId, setProductId] = React.useState("");
  const [uploading, setUploading] = React.useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleSubmit = () => {
    setUploading(true);
    console.log(file, productId);
  };

  return (
    <div className="flex justify-between items-center w-full glass p-4 border-2 ">
      <div className="border-2 border-primary">
        <input className="p-2 bg-transparent text-black" type="file"></input>
        <input
          className=" p-3  bg-transparent text-black"
          type="text"
          placeholder="Product id"
        ></input>
      </div>
      {uploading ? null : (
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          UPLOAD
        </button>
      )}
    </div>
  );
}

export default AdminProducts;
