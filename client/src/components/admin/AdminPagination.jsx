import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const AdminPagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage, setItemsPerPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPageNumbers = () => {
        const pageNumbers = [];
        const maxDisplayedPages = 5;

        if (totalPages <= maxDisplayedPages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);
            let startPage = Math.max(2, currentPage - 1);
            let endPage = Math.min(totalPages - 1, currentPage + 1);

            if (currentPage <= 3) endPage = Math.min(4, totalPages - 1);
            if (currentPage >= totalPages - 2) startPage = Math.max(2, totalPages - 3);

            if (startPage > 2) pageNumbers.push("...");
            for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);
            if (endPage < totalPages - 1) pageNumbers.push("...");
            if (totalPages > 1) pageNumbers.push(totalPages);
        }
        return pageNumbers;
    };

    const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const goToPage = (page) => typeof page === "number" && setCurrentPage(page);

    if (totalPages <= 1) return null;

    return (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm space-y-4 sm:space-y-0">
            <div className="text-sm font-medium text-gray-500">
                Showing <span className="text-gray-900 font-semibold">{Math.min(totalItems, (currentPage - 1) * itemsPerPage + 1)}</span>
                {" - "}
                <span className="text-gray-900 font-semibold">{Math.min(currentPage * itemsPerPage, totalItems)}</span>
                {" of "}
                <span className="text-gray-900 font-semibold">{totalItems}</span> items
            </div>

            <div className="flex items-center space-x-2 bg-white p-1 rounded-xl shadow-sm border border-gray-100">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="h-8 w-8 p-0 rounded-lg hover:bg-gray-100"
                >
                    <ChevronDown className="h-4 w-4 rotate-90 text-gray-600" />
                </Button>

                <div className="flex items-center px-1">
                    {getPageNumbers().map((page, index) =>
                        typeof page === "number" ? (
                            <Button
                                key={index}
                                variant={currentPage === page ? "default" : "ghost"}
                                size="sm"
                                onClick={() => goToPage(page)}
                                className={`h-8 w-8 p-0 mx-0.5 rounded-lg transition-all ${currentPage === page
                                        ? "bg-primary text-white shadow-md shadow-primary/20"
                                        : "text-gray-600 hover:bg-gray-100 font-medium"
                                    }`}
                            >
                                {page}
                            </Button>
                        ) : (
                            <span key={index} className="mx-1 text-gray-400 font-medium tracking-widest hidden sm:inline">...</span>
                        )
                    )}
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="h-8 w-8 p-0 rounded-lg hover:bg-gray-100"
                >
                    <ChevronDown className="h-4 w-4 -rotate-90 text-gray-600" />
                </Button>

                <div className="pl-2 border-l border-gray-100 ml-2">
                    <Select
                        value={itemsPerPage.toString()}
                        onValueChange={(value) => {
                            setItemsPerPage(Number(value));
                            setCurrentPage(1);
                        }}
                    >
                        <SelectTrigger className="w-[100px] h-8 bg-gray-50/50 border-0 shadow-none font-medium focus:ring-0">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-gray-100 shadow-xl">
                            <SelectItem value="5" className="rounded-lg">5 / page</SelectItem>
                            <SelectItem value="10" className="rounded-lg">10 / page</SelectItem>
                            <SelectItem value="25" className="rounded-lg">25 / page</SelectItem>
                            <SelectItem value="50" className="rounded-lg">50 / page</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default AdminPagination;
