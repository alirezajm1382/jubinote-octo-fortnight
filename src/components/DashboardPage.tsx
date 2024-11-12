"use client";

import React, { useContext } from "react";

// components
import Card from "./shared/Card";
import Button from "./shared/Button";
import Modal from "./shared/Modal";
import Input from "./shared/Input";
import TextArea from "./shared/TextArea";

// context
import { ModalContext } from "@/app/layout";

const DashboardPage: React.FunctionComponent = () => {
  const { isOpen, openModal, closeModal } = useContext(ModalContext);

  return (
    <Card maxWidth="full">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold">Your Tasks.</h1>
        <Button variant="primary" icon={<PlusIcon />} onClick={openModal}>
          Add Item
        </Button>
      </div>
      <div className="text-gray-300 mt-8">
        <h2 className="text-xl mb-4">Welcome to your Dashboard</h2>
        <p>
          Here you can manage your tasks and projects, create new ones, and
          track your progress.
        </p>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Add New Task"
        actionButton={<Button variant="outline">Add</Button>}
      >
        <div className="flex flex-col gap-2">
          <Input label="Title" fullWidth />
          <TextArea label="Description" fullWidth style={{ minHeight: 100 }} />
        </div>
      </Modal>
    </Card>
  );
};

export default DashboardPage;

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
};
