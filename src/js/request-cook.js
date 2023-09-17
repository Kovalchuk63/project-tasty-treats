const API_URL = 'https://tasty-treats-backend.p.goit.global/api/events';

export async function fetchCook() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Код: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
