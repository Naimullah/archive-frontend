import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi"; // Import icons

const invoices = Array.from({ length: 100 }, (_, index) => ({
  id: `INV00${index + 1}`,
  status: index % 2 === 0 ? "Paid" : "Pending",
  method: index % 2 === 0 ? "Credit Card" : "PayPal",
  amount: `$${(index + 1) * 100}.00`,
}));

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Calculate total pages
  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  // Get current items for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = invoices.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-4">
      {/* Heading */}
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Invoices</h2>
  

        {/* Items per page selection */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Show:</span>
          <select
            className="border rounded-md px-2 py-1"
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page
            }}
          >
            {[10, 20, 30, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size} per page
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((invoice, index) => (
              <TableRow key={index} className="border-b hover:bg-gray-50">
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell className="text-right space-x-3">
                  <button className="text-blue-600 hover:text-blue-800" title="View">
                    <FiEye size={18} />
                  </button>
                  <button className="text-green-600 hover:text-green-800" title="Edit">
                    <FiEdit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800" title="Delete">
                    <FiTrash2 size={18} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, invoices.length)} of {invoices.length} invoices
        </p>

        <Pagination>
          <PaginationContent className="flex space-x-2">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  className={currentPage === i + 1 ? "font-bold text-blue-600" : ""}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )).slice(0, 5)}

            {totalPages > 5 && <PaginationItem><span className="text-gray-500">...</span></PaginationItem>}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Dashboard;
