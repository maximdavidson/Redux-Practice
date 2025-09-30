import S from "./styles.module.css";

type FiltersPanelProps = {
  categories: string[];
  selected: string[];
  onToggle: (category: string) => void;
};

export const FiltersPanel = ({
  categories,
  selected,
  onToggle,
}: FiltersPanelProps) => {
  const handleChange = (category: string) => () => {
    onToggle(category);
  };

  return (
    <div className={S.container}>
      <h3 className={S.title}>Категории</h3>
      <ul className={S.list}>
        {categories.map((category) => (
          <li key={category} className={S.listItem}>
            <label className={S.label}>
              <input
                type="checkbox"
                className={S.checkbox}
                checked={selected.includes(category)}
                onChange={handleChange(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
