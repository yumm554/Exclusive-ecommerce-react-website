import('../assets/css/redSmallSection.css');
const RedSmallSection = ({ head }) => {
  return (
    <div className="red-small-section">
      <div className="red-part"></div>
      <h2 className="red-small-section-content">{head}</h2>
    </div>
  );
};
export default RedSmallSection;
