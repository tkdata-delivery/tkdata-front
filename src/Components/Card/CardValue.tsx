// CardValue.jsx

/**
 * Composant `CardValue`
 * 
 * Ce composant affiche une valeur principale (ex. : chiffre d'affaires, nombre d'utilisateurs, etc.)
 * accompagnée d’un indicateur coloré vertical à gauche.
 * 
 * Props :
 * - value : texte à afficher (par défaut : '952.6k cfa')
 * - indicatorColor : couleur de la barre verticale à gauche (par défaut : 'bg-green-500')
 * - valueClassName : classes CSS pour personnaliser l’apparence de la valeur (par défaut : 'text-3xl font-bold')
 */
const CardValue = ({ 
  value = '952.6k cfa', 
  indicatorColor = 'bg-green-400',
  valueClassName = 'text-3xl font-bold' 
}) => {
  return (
    <div className="flex items-center mb-3">
      {/* Indicateur coloré vertical */}
      <div className={`w-1 h-12 rounded-full mr-3 ${indicatorColor}`}></div>

      {/* Valeur affichée */}
      <div className={valueClassName}>{value}</div>
    </div>
  );
};

export default CardValue;
