import { useState } from "react";

const DeleteConfirmation = ({ isOpen, onClose, onConfirm, item }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold text-red-600">Are you sure?</h2>
        <p className="mt-2 text-gray-700">
          Do you really want to delete{" "}
          <span className="font-bold">{item.details.Title}</span> 
        </p>
        <ul className="mt-3 text-sm text-gray-600">
          {Object.keys(item.details).map((key) => (
            <li key={key}>
              <span className="font-semibold">{key}:</span> {item.details[key]}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(item.details)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
