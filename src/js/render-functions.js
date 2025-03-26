const gallery = document.querySelector('.gallery');

export function renderGalleryList(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
      <div>
        <p>Likes: ${likes}</p>
        <p>Views: ${views}</p>
        <p>Comments: ${comments}</p>
        <p>Downloads: ${downloads}</p>
    </div>

  </a>
</li>
`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGalleryList() {
  gallery.innerHTML = '';
}
