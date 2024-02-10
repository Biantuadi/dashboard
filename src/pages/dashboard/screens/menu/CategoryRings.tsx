import { RadialBarChart, RadialBar } from 'recharts';
import styled from 'styled-components';

const CategoryRings = ({ categories, products }: any) => {
  // Définir une palette de couleurs douces et subtiles
  const palette = ['#8E44AD', '#2980B9', '#27AE60', '#8b8a87', '#E67E22'];

  const uniqueColorsGenerator = (function* () {
    let index = 0;
    while (true) {
      yield palette[index];
      index = (index + 1) % palette.length;
    }
  } )();

  // Créer un tableau comptant les produits par catégorie et attribuer une couleur de la palette
  const data = categories.map((category: any, index: number) => {
    const productCount = products.filter((product: any) => product.category_id === category.id).length;
    return {
      categoryName: category.name,
      count: productCount,
      fill: uniqueColorsGenerator.next().value,
    };
  });

  // Trier les données pour avoir les anneaux intérieurs représentant les catégories avec moins de produits
  data.sort((a, b) => b.count - a.count);

  return (
    <CategoryRingsStyled>
      <RadialBarChart
        width={250}
        height={250}
        innerRadius="20%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15} // Angle minimum pour une tranche
          background
          clockWise
          dataKey='count'
          radius={100} // Ajustez le rayon ici pour augmenter la taille des barres
        />
      </RadialBarChart>
    </CategoryRingsStyled>
  );
};

const CategoryRingsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .recharts-wrapper {
    transform: scale(1.5);
    margin-top: 20px;
  }
`;

export default CategoryRings;
