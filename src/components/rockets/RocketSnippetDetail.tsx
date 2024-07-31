interface IRocketSnippetDetails {
  label: string;
  detail: string | boolean;
}
export default function RocketSnippetDetail({
  detail,
  label,
}: IRocketSnippetDetails) {
  return (
    <div>
      <div className="flex gap-2 text-left">
        <p>{label}:</p>
        <p className="text-gray-300">{String(detail)}</p>
      </div>
    </div>
  );
}
