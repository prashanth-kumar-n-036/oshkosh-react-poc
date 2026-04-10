import React from "react";
import { useNavigate } from "react-router";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Alerts from "./alerts";
import ExpandingSection from "../../components/expanding-section/ExpandingSection";

export default function Home() {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate("/profile"); // Change "/profile" to your desired route
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-semibold text-gray-900">Logo</div>
        <div className="flex items-center gap-4">
          <span className="text-lg text-gray-700">Welcome User</span>
          <button
            onClick={handleUserClick}
            className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
          >
            <i className="pi pi-user text-xl"></i>
          </button>
        </div>
      </header>

      {/* Search Section */}
      <div className="px-16 py-8">
        <div className="bg-white border border-gray-200 rounded-3xl p-6 flex items-center gap-4 shadow-sm">
          <InputText
            placeholder="Field 1"
            className="flex-1 p-inputtext-sm rounded-full border-gray-200 bg-gray-50"
          />
          <InputText
            placeholder="Field 2"
            className="flex-1 p-inputtext-sm rounded-full border-gray-200 bg-gray-50"
          />
          <InputText
            placeholder="Field 3"
            className="flex-1 p-inputtext-sm rounded-full border-gray-200 bg-gray-50"
          />
          <Button
            label="Search"
            className="p-button-rounded p-button-outlined p-button-sm"
          />
        </div>
      </div>

      <div className="px-4 py-4">
        {/* Alerts Section */}
        <div className="mb-4">
          <ExpandingSection
            title="Alerts"
            expandableContent={<div>Additional alert details can go here.</div>}
          >
            <Alerts />
          </ExpandingSection>
        </div>
      </div>
    </div>
  );
}
