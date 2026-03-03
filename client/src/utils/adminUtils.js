export const formatDate = (dateString) => {
    try {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "Invalid Date";
        return date.toLocaleString();
    } catch (error) {
        console.error("Error formatting date:", error);
        return "Error";
    }
};

export const filterByDateRange = (data, startDate, endDate) => {
    if (!data || !Array.isArray(data)) return [];
    if (!startDate && !endDate) return data;

    return data.filter((item) => {
        if (!item || !item.createdAt) return false;
        const itemDate = new Date(item.createdAt);
        if (isNaN(itemDate.getTime())) return false;

        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            end.setHours(23, 59, 59, 999);
            return itemDate >= start && itemDate <= end;
        } else if (startDate) {
            const start = new Date(startDate);
            return itemDate >= start;
        } else if (endDate) {
            const end = new Date(endDate);
            end.setHours(23, 59, 59, 999);
            return itemDate <= end;
        }

        return true;
    });
};

export const sortByDate = (data, order = "desc") => {
    if (!data || !Array.isArray(data)) return [];

    return [...data].sort((a, b) => {
        const dateA = a && a.createdAt ? new Date(a.createdAt) : new Date(0);
        const dateB = b && b.createdAt ? new Date(b.createdAt) : new Date(0);
        return order === "desc" ? dateB - dateA : dateA - dateB;
    });
};

export const getPaginatedData = (data, currentPage, itemsPerPage) => {
    if (!data || !Array.isArray(data)) return [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return data.slice(indexOfFirstItem, indexOfLastItem);
};
