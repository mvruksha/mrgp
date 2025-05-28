export default function PropertyDescription({ description }) {
  if (!description) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Property Description</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
