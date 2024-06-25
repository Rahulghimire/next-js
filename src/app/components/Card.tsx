const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    backgroundColor: "#fff",
    bordeRadius: " 8px",
    boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "300px",
    margin: "20px",
  };
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
