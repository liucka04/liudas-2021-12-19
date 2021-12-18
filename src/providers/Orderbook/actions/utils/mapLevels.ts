type Params = {levels: [number, number][]};

export const mapLevels = ({levels}: Params) => {
  const mappedLevels = levels.map(level => {
    const [price, size] = level;

    return {
      price,
      size,
      total: 0,
    };
  });

  return mappedLevels;
};
