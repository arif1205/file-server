export const validate_image_file = (filetype: string) => {
	const allowed_file_types = ["image/jpeg", "image/png", "image/jpg"];
	return allowed_file_types.includes(filetype);
};

export const validate_pdf_file = (filetype: string) => {
	const allowed_file_types = ["application/pdf"];
	return allowed_file_types.includes(filetype);
};

export const validate_file_size = (filesize: number) => {
	const max_file_size = 1024 * 1024 * 10; // 5MB
	return filesize <= max_file_size;
};
