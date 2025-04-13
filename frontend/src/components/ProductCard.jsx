import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { useProductStore } from "../store/product";
import { Button } from "@chakra-ui/react";
const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [showModal, setShowModal] = useState(false);
  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    console.log(success, message);
  };

  const handleUpdateProduct = async () => {
    const { success, message } = await updateProduct(product._id, updatedProduct);
    console.log(success, message);
    setShowModal(false); // close modal
  };

  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <div className="content">
        <h3 >{product.name}</h3>
        <p><strong>${product.price}</strong></p>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button onClick={() => setShowModal(true)}>
            <MdModeEdit />
          </Button>
          <Button onClick={() => handleDeleteProduct(product._id)}>
            <FaRegTrashCan />
          </Button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Product</h2>
            <input
              name="name"
              value={updatedProduct.name}
              onChange={handleChange}
              placeholder="Product Name"
            />
            <input
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              placeholder="Price"
              type="number"
            />
            <input
              name="image"
              value={updatedProduct.image}
              onChange={handleChange}
              placeholder="Image URL"
            />
            <div className="modal-actions">
              <button onClick={handleUpdateProduct}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
