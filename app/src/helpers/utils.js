// Only take collections that are NOT excluded from the feed or that HAVE assets
export function filterCollections(collections) {
  return collections.filter(({ excludedFromFeed, assets, renderStyle}) => {
    return !(excludedFromFeed || /ads/i.test(renderStyle) || assets.length < 1);
  });
}
