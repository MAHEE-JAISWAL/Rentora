export class ProductDto {
    constructor({
      title,
      description,
      category,
      subCategory,
      price,
      rentDuration,
      size,
      color,
      style,
      occasion,
      images,
      available,
      location,
    }) {
      this.title = title;
      this.description = description;
      this.category = category;
      this.subCategory = subCategory;
      this.price = price;
      this.rentDuration = rentDuration;
      this.size = size;
      this.color = color;
      this.style = style;
      this.occasion = occasion;
      this.images = images;
      this.available = available;
      this.location = location;
    }
  
    validate() {
      if (
        !this.title ||
        !this.description ||
        !this.category ||
        !this.subCategory ||
        !this.price ||
        !this.rentDuration ||
        !this.location
      ) {
        throw new Error("Required fields are missing.");
      }
  
      if (typeof this.price !== "number" || this.price <= 0) {
        throw new Error("Price must be a positive number.");
      }
  
      if (typeof this.rentDuration !== "number" || this.rentDuration <= 0) {
        throw new Error("Rent duration must be a positive number.");
      }
    }
  }