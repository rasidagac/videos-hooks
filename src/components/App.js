import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const onTermSubmit = async (term) => {
		await youtube.get("/search", {
			params: {
				q: term,
			},
		}).then(r => {
			setVideos(r.data.items);
			setSelectedVideo(r.data.items[0]);
		});

	};

	useEffect(() => {
		onTermSubmit("buildings");
	}, []);

	return (
		<div className="ui container" style={{ marginTop: "10px" }}>
			<SearchBar onFormSubmit={onTermSubmit} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList
							videos={videos}
							onVideoSelect={(video) => setSelectedVideo(video)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
