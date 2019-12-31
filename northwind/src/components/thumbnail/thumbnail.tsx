import * as React from 'react';
import "./thumbnail.css";

export interface ThumbnailProps {
    imageSource: string;
    imageWidth?: number;
    imageHeight?: number;
}

class Thumbnail extends React.Component<ThumbnailProps> {
    public render(): JSX.Element {
        return (
            <div className="thumbnail">
                <img src={this.props.imageSource}
                    width={this.props.imageWidth || 80}
                    height={this.props.imageHeight || 80} />
            </div>
        );
    }
}

export default Thumbnail;
