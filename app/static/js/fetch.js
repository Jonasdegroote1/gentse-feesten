const getData = async (x) => {
  try {
    const response = await fetch(x, {});
    if (response.status === 200) {
      const jsonData = await response.json();
      return jsonData;
    }
    throw Error("Something went wrong!");
  } catch (error) {
    console.log(`Catch: ${error}`);
  }
};
