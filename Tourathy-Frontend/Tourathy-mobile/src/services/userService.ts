export const getUser = async () => {
  try {
    const response = await fetch('http://192.168.1.2:8080/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("Réponse API:", data);

    return data.length > 0 ? data[0] : null; // Prendre le premier élément du tableau
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur", error);
    throw error;
  }
};
