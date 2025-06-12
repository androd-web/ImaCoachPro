 import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import ContentMain from '../../components/ContentMain/ContentMain';

const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />       {/* En-tête du contenu (titre, barre de recherche, etc.) */}
      <ContentMain />      {/* Contenu principal (graphiques, tableaux, etc.) */}
    </div>
  )
}

export default Content;
