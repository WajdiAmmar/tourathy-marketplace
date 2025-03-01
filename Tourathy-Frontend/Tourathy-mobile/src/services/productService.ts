export const getProduct = async () => {
  try {
    const response = await fetch('http://192.168.1.2:8080/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("Réponse API produit:", data);

    return data.length > 0 ? data[0] : null; // Récupérer le premier produit du tableau
  } catch (error) {
    console.error("Erreur lors de la récupération du produit", error);
    throw error;
  }
};
