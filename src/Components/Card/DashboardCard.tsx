// DashboardCard.jsx

// Importation de l'icône depuis Ant Design
import { AreaChartOutlined } from '@ant-design/icons';

// Importation des composants personnalisés
import CardContainer from './CardContainer';
import CardHeader from './CardHeader';
import CardValue from './CardValue';
import CardFooter from './CardFooter';

/**
 * Composant `DashboardCard`
 * 
 * Ce composant regroupe et structure les sous-composants d’une carte de tableau de bord :
 * - un en-tête (titre + icône),
 * - une valeur principale avec indicateur coloré,
 * - un pied de carte avec un pourcentage d’évolution et une description.
 * 
 * Il est entièrement personnalisable via les props.
 * 
 * Props :
 * - title : titre affiché dans l'en-tête (par défaut : 'Chiffre d'affaires total')
 * - value : valeur principale affichée (par défaut : '952.6k cfa')
 * - percentage : variation affichée en bas (par défaut : '+8.5%')
 * - description : texte explicatif du pourcentage (par défaut : 'Rapport de semaines dernières')
 * - isPositive : indique si le pourcentage est positif (affiche une flèche verte vers le haut)
 * - icon : icône à afficher dans l'en-tête (par défaut : graphique)
 * - iconBackground : couleur de fond de l’icône
 * - iconColor : couleur de l’icône
 * - indicatorColor : couleur de la barre verticale (à côté de la valeur)
 * - className : classes CSS supplémentaires pour le conteneur principal
 */
const DashboardCard = ({
  title = 'Chiffre d\'affaires total',
  value = '952.6k cfa',
  percentage = '+8.5%',
  description = 'Rapport de semaines dernières',
  isPositive = true,
  icon = <AreaChartOutlined />,
  iconBackground = 'bg-green-50',
  iconColor = 'text-green-500',
  indicatorColor = 'bg-green-500',
  className = '',
}) => {
  return (
    <CardContainer className={className}>
      {/* En-tête avec titre et icône */}
      <CardHeader 
        title={title} 
        icon={icon} 
        iconBackground={iconBackground}
        iconColor={iconColor}
      />
      
      {/* Valeur principale avec indicateur coloré */}
      <CardValue 
        value={value} 
        indicatorColor={indicatorColor} 
      />
      
      {/* Pied de carte avec pourcentage et description */}
      <CardFooter 
        percentage={percentage} 
        description={description}
        isPositive={isPositive}
      />
    </CardContainer>
  );
};

export default DashboardCard;
