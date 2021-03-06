type Params = {levels: [number, number][]};

export const mapPriceLevels = ({levels}: Params) => {
  const mappedLevels = levels.map(level => {
    const [price, size] = level;

    return {
      price,
      size,
    };
  });

  return mappedLevels;
};
