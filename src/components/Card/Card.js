import React from 'react';
import propTypes from 'prop-types';

const Card = ({ movie }) => {
	return (
		<div className="col-md-4 d-flex align-items-stretch justify-content-center mb-4">
			<div className="card w-100">
				<img
					src={movie.Poster}
					alt={movie.Title}
					className="card-img-top"
          width="100%"
				/>
				<div className="card-body" height="150px">
					<h4>
						{movie.Title} {movie.Year}
					</h4>
					<p>{movie.Type}</p>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	movie: propTypes.shape({
		Title: propTypes.string,
		Year: propTypes.string,
		Poster: propTypes.string,
		Type: propTypes.string,
	}).isRequired,
};

export default Card;
