export const capitalizeFirstLetter = (name) => {
    // Check if name is provided
    if (!name) return "";

    // Capitalize the first letter and concatenate with the rest of the name
    return name.charAt(0).toUpperCase();
};