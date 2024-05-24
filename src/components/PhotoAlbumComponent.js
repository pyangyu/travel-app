// src/components/PhotoAlbumComponent.js
import React from 'react';
import PhotoAlbum from 'react-photo-album';

const photos = [
  { src: '/assets/photo1.png', width: 800, height: 600 },
  { src: '/assets/photo2.jpg', width: 1600, height: 900 },
  // Add more photos as needed
];

export default function PhotoAlbumComponent() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}
