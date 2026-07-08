import "../styles/SearchBar.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search coffee..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}