import { ReactNode } from "react";
import { IconType } from "react-icons";

type WeatherIndicatorProps = {
    children: ReactNode;
    Icon: IconType;
    id: string;
}

const WeatherIndicator: React.FC<WeatherIndicatorProps> = ({children, Icon, id}) => {
    return (
        <div className="flex gap-2">
            <Icon/> {children}
        </div>
    );
}

export default WeatherIndicator;
