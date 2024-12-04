export function handleSubmit(event, setData) {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
  
    const takeData = {
        Address: formData.get('address'),
        Area: formData.get('area'),
        Frontage: formData.get('frontage'),
        "Access Road": formData.get('accessRoad'),
        "House direction": formData.get('houseDirection'),
        "Balcony direction": formData.get('balconyDirection'),
        Floors: formData.get('floors'),
        Bedrooms: formData.get('bedrooms'),
        Bathrooms: formData.get('bathrooms'),
        "Legal status": formData.get('legalStatus'),
        "Furniture state": formData.get('furnitureState'),
        Project: formData.get('project'),
        City: formData.get('city'),
        Ward: formData.get('ward'),
        District: formData.get('district'),
        Location: formData.get('location'),
    };
    setData(takeData);
}