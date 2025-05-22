

interface FeatureCardProps {
  title: string;
  description: string;
  iconPath: string;
}

const FeatureCard = ({ title, description, iconPath }: FeatureCardProps) => (
    <div className="card-bg-custom p-6 rounded-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl">
        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
            </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

export default FeatureCard;
