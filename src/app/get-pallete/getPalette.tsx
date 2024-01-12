// import Vibrant from 'node-vibrant';
//
// export async function getPalette(imgUrl: string, quantityColor = 1, startColor = 0) {
//   try {
//     const paletteData = await Vibrant.from(imgUrl).getPalette();
//     const colorPromises = Object.values(paletteData).map(async (swatch) => {
//       const currentColor = swatch?.getRgb();
//       const currentPopulation = swatch?.getPopulation();
//       return { color: currentColor, population: currentPopulation };
//     });
//     const resolvedColors = await Promise.all(colorPromises);
//     const sortedColors = resolvedColors.sort((a: any, b: any) => b?.population - a?.population);
//     const sortedValuesColors = sortedColors
//       .map((colors) => colors.color)
//       .slice(startColor, startColor + quantityColor);
//
//     return sortedValuesColors;
//   } catch (error) {
//     console.error('Error while fetching palette:', error);
//     throw error;
//   }
// }
