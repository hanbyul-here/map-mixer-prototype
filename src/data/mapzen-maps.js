export default {
  "bubble-wrap": {
    "baseURL": "https://mapzen.com/carto/bubble-wrap-style/8/bubble-wrap-style.zip",
    "attributes": {
        "label": {
        "baseURL": "https://mapzen.com/carto/bubble-wrap-style/8/themes/label-",
        "suffixURL": ".zip",
        "type": "range",
        "minValue": 0,
        "maxValue": 10
      }
    }

  },
  "cinnabar": {
    "baseURL": "https://mapzen.com/carto/cinnabar-style/8/cinnabar-style.zip",
    "attributes": {
      "label": {
        "baseURL": "https://mapzen.com/carto/cinnabar-style/8/themes/label-",
        "suffixURL": ".zip",
        "type": "range",
        "minValue": 0,
        "maxValue": 10
      }
    }
  },
  "refill": {
    "baseURL": "https://mapzen.com/carto/refill-style/9/refill-style.zip",
    "attributes": {
      "label": {
        "baseURL": "https://mapzen.com/carto/refill-style/9/themes/label-",
        "suffixURL": ".zip",
        "type": "range",
        "minValue": 0,
        "maxValue": 10,
      },
      "colors": {
        "type": "select",
        "baseURL":  "https://mapzen.com/carto/refill-style/9/themes/color-",
        "suffixURL": ".zip",
        "values": {
          "black": "black",
          "gray": "gray",
          "blue": "blue",
          "sepia": "sepia",
          "pink": "pink",
          "pink-yellow": "pink-yellow",
          "brown-orange": "brown-orange",
          "blue-gray": "blue-gray",
          "high-contrast": "high-contrast",
          "inverted": "inverted",
          "purple-green": "purple-green",
          "gray-gold": "gray-gold",
          "zinc": "zinc.zip"
        }
      }
    },
  }
}