export const formatPokemonName = (name) => {
    return name.replace(/-/g, ' ');
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const formatearPeso = (peso) => {
    if (peso >= 10) {
        return (peso / 10).toFixed(1).replace('.', ',');
      }
      return `0,${peso}`;
}

export const formatearAltura = (altura) => {
    if (altura >= 10) {
        return (altura / 10).toFixed(1).replace('.', ',');
      }
      return `0,${altura}`;
}
