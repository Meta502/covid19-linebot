var lodash = require('lodash')

function countryTemplate(data_covid) {
    var country = data_covid.country
    var cases = data_covid.cases.toLocaleString()
    var deaths = data_covid.deaths.toLocaleString()
    var recovered = data_covid.recovered.toLocaleString()
    var active = data_covid.active.toLocaleString()
    var casepermil = data_covid.casesPerOneMillion.toLocaleString()
    var todayCases = data_covid.todayCases.toLocaleString()
    var todayDeaths = data_covid.todayDeaths.toLocaleString()
    var reply = {
        "type": "flex",
        "altText": "Kasus",
        "contents": {
            "type": "bubble",
            "hero": {
              "type": "image",
              "url": "https://beta.ctvnews.ca/content/dam/ctvnews/images/2020/2/3/1_4795076.jpg?cache_timestamp=1583170116225",
              "size": "full",
              "margin": "none",
              "aspectMode": "cover",
              "aspectRatio": "18:9"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": country,
                  "weight": "bold",
                  "size": "xl",
                  "color": "#FFFFFF"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "sm",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Data Kumulatif",
                      "color": "#FFFFFF",
                      "weight": "bold",
                      "size": "lg"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Total Kasus (Kumulatif)",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": cases,
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Total Kematian",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": deaths,
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Total Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": recovered,
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Aktif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": active,
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus per 1 Juta Jiwa",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": casepermil,
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Data Hari Ini",
                      "color": "#FFFFFF",
                      "weight": "bold",
                      "size": "lg"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Baru",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": todayCases,
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kematian",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": todayDeaths,
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "backgroundColor": "#121212"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Based on javieraviles' covidAPI",
                      "color": "#FFFFFF",
                      "size": "xxs",
                      "action": {
                        "type": "uri",
                        "label": "action",
                        "uri": "https://github.com/javieraviles/covidAPI"
                      }
                    }
                  ],
                  "margin": "none",
                  "paddingStart": "10px",
                  "paddingEnd": "10px"
                }
              ],
              "backgroundColor": "#262626",
              "spacing": "none",
              "margin": "md"
            }
          
        }
    }
    return reply;
}

function globalTemplate(data_covid) {
  var data = data_covid;
  var cases = data.cases.toLocaleString()
  var deaths = data.deaths.toLocaleString()
  var recovered = data.recovered.toLocaleString()
  var reply = {
    "type": "flex",
    "altText": "Kasus Global",
    "contents": {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://geotimes.co.id/wp-content/uploads/2020/03/1_4837302.jpg",
        "size": "full",
        "aspectRatio": "18:9",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Global",
            "weight": "bold",
            "size": "xl",
            "color": "#FFFFFF"
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Total Kasus (Kumulatif)",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": cases,
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 5
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Total Kematian",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": deaths,
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 5
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Total Sembuh",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": recovered,
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 5
                  }
                ]
              }
            ]
          }
        ],
        "backgroundColor": "#121212"
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "text",
            "text": "c!cases <negara> untuk info negara tertentu.",
            "size": "xxs",
            "align": "center",
            "color": "#FFFFFF",
            "weight": "regular"
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0,
        "backgroundColor": "#262626"
      }
    }
  }
  return reply;
}

function infoMenu() {
  var reply = {
    "type": "flex",
    "altText": "Menu Informasi",
    "contents": {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://geotimes.co.id/wp-content/uploads/2020/03/1_4837302.jpg",
        "size": "full",
        "aspectRatio": "18:9",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Situs Informasi COVID-19",
            "weight": "bold",
            "size": "lg",
            "color": "#FFFFFF"
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Silahkan pilih kategori informasi yang diinginkan.",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1,
                    "wrap": true
                  }
                ]
              }
            ]
          }
        ],
        "backgroundColor": "#121212",
        "paddingBottom": "30px"
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "message",
              "label": "Informasi Umum",
              "text": "c!info general"
            },
            "color": "#4287f5"
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "message",
              "label": "Informasi Regional",
              "text": "c!info regional"
            },
            "color": "#4287f5"
          },
          {
            "type": "spacer",
            "size": "sm"
          }
        ],
        "flex": 0,
        "backgroundColor": "#262626"
      }
    }
  }
  return reply
}

function generalTemplate() {
  var reply = {
    "type": "flex",
    "altText": "General Info",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "[INDONESIAN] General Info",
                "size": "xs",
                "color": "#FFFFFF",
                "weight": "bold"
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "none",
            "margin": "none",
            "paddingBottom": "10px",
            "paddingTop": "10px"
          },
          "hero": {
            "type": "image",
            "url": "https://kawalcovid19.id/android-chrome-192x192.png",
            "size": "full",
            "aspectRatio": "21:9",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "KAWALCOVID19",
                "weight": "bold",
                "size": "md",
                "margin": "none",
                "color": "#FFFFFF"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xs",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Situs ini merupakan sumber informasi inisiatif sukarela warganet Indonesia pro-data, terdiri dari praktisi kesehatan, akademisi & profesional.",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 1,
                        "wrap": true,
                        "gravity": "center"
                      }
                    ]
                  }
                ]
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "sm"
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Click Here",
                  "uri": "https://kawalcovid19.id/"
                },
                "height": "sm",
                "style": "link",
                "color": "#4287f5"
              }
            ],
            "backgroundColor": "#262626",
            "paddingAll": "5px"
          },
          "styles": {
            "header": {
              "separator": false
            },
            "hero": {
              "backgroundColor": "#231F20"
            }
          }
        },
        {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "[INDONESIAN] General Info",
                "size": "xs",
                "color": "#FFFFFF",
                "weight": "bold"
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "none",
            "margin": "none",
            "paddingBottom": "10px",
            "paddingTop": "10px"
          },
          "hero": {
            "type": "image",
            "url": "https://scontent-sin6-1.xx.fbcdn.net/v/t31.0-8/p960x960/17192626_1564329196930508_2184682457695306080_o.jpg?_nc_cat=1&_nc_sid=85a577&_nc_eui2=AeG12clsN0CX69lam4HW1t1vxgWJADOMCYq5jeg4B-1vmW3rZRqhI_oveQa1ZAYHdAvBePv4WfknY7X5cd-xvX0s4kzVmp_CqK4JB6r4n7v1PA&_nc_oc=AQlrUPKXuKWyqyzh3a5ri7bWWbmCFjLkubNqH_wvwpUPq-OgVg0NIyo0dvAabxsdgKDHKXaAt1EicUlKsAaBg0tD&_nc_ht=scontent-sin6-1.xx&_nc_tp=6&oh=742e1b4404bc169181668c82c4869f1b&oe=5EA0CFDF",
            "size": "full",
            "aspectRatio": "21:9",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Indonesian Govt. COVID-19 Site",
                "weight": "bold",
                "size": "md",
                "margin": "none",
                "color": "#FFFFFF"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xs",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Website informasi resmi milik pemerintah Indonesia mengenai wabah COVID-19",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 1,
                        "wrap": true,
                        "gravity": "center"
                      }
                    ]
                  }
                ]
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "sm"
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Click Here",
                  "uri": "https://www.covid19.go.id/"
                },
                "height": "sm",
                "style": "link",
                "color": "#4287f5"
              }
            ],
            "backgroundColor": "#262626",
            "paddingAll": "5px"
          },
          "styles": {
            "header": {
              "separator": false
            }
          }
        },
        {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "[ENGLISH] General Info",
                "size": "xs",
                "color": "#FFFFFF",
                "weight": "bold"
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "none",
            "margin": "none",
            "paddingBottom": "10px",
            "paddingTop": "10px"
          },
          "hero": {
            "type": "image",
            "url": "https://fontmeme.com/images/WHO-logo-font.png",
            "size": "full",
            "aspectRatio": "21:9",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "WHO COVID-19 Site",
                "weight": "bold",
                "size": "md",
                "margin": "none",
                "color": "#FFFFFF"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xs",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "The World Health Organization's short and concise informational page on the COVID-19 outbreak",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 1,
                        "wrap": true,
                        "gravity": "center"
                      }
                    ]
                  }
                ]
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "sm"
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Click Here",
                  "uri": "https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                },
                "height": "sm",
                "style": "link",
                "color": "#4287f5"
              }
            ],
            "backgroundColor": "#262626",
            "paddingAll": "5px"
          },
          "styles": {
            "header": {
              "separator": false
            }
          }
        },
        {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "[ENGLISH] General Info",
                "size": "xs",
                "color": "#FFFFFF",
                "weight": "bold"
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "none",
            "margin": "none",
            "paddingBottom": "10px",
            "paddingTop": "10px"
          },
          "hero": {
            "type": "image",
            "url": "https://www.finddx.org/wp-content/uploads/2019/07/cdc-logo-356x219.jpg",
            "size": "full",
            "aspectRatio": "21:9",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "CDC COVID-19 Site",
                "weight": "bold",
                "size": "md",
                "margin": "none",
                "color": "#FFFFFF"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xs",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Short and concise informational page on the COVID-19 outbreak",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 1,
                        "wrap": true,
                        "gravity": "center"
                      }
                    ]
                  }
                ]
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "sm"
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Click Here",
                  "uri": "https://www.cdc.gov/coronavirus/2019-ncov/index.html"
                },
                "height": "sm",
                "style": "link",
                "color": "#4287f5"
              }
            ],
            "backgroundColor": "#262626",
            "paddingAll": "5px"
          },
          "styles": {
            "header": {
              "separator": false
            }
          }
        }
      ]
    }
  }
  return reply;
}

function regionalTemplate() {
  var reply = {
    "type": "flex",
    "altText": "Regional Info",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Regional Info",
                "size": "xs",
                "color": "#FFFFFF",
                "weight": "bold"
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "none",
            "margin": "none",
            "paddingBottom": "10px",
            "paddingTop": "10px"
          },
          "hero": {
            "type": "image",
            "url": "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112014/logo_dki_jakarta.png?itok=d6VfVngF",
            "size": "full",
            "aspectRatio": "21:9",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Jakarta COVID-19 Site",
                "weight": "bold",
                "size": "md",
                "margin": "none",
                "color": "#FFFFFF"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xs",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Situs informasi COVID-19 milik pemerintah DKI Jakarta",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 1,
                        "wrap": true,
                        "gravity": "center"
                      }
                    ]
                  }
                ]
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "sm"
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Click Here",
                  "uri": "https://corona.jakarta.go.id/id"
                },
                "height": "sm",
                "style": "link",
                "color": "#4287f5"
              }
            ],
            "backgroundColor": "#262626",
            "paddingAll": "5px"
          },
          "styles": {
            "header": {
              "separator": false
            }
          }
        },
        {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Regional Info",
                "size": "xs",
                "color": "#FFFFFF",
                "weight": "bold"
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "none",
            "margin": "none",
            "paddingBottom": "10px",
            "paddingTop": "10px"
          },
          "hero": {
            "type": "image",
            "url": "https://pikobar.jabarprov.go.id/logo.jpg",
            "size": "full",
            "aspectRatio": "21:9",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Jawa Barat COVID-19 Site",
                "weight": "bold",
                "size": "md",
                "margin": "none",
                "color": "#FFFFFF"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xs",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Pusat Informasi dan Koordinasi COVID-19 Provinsi Jawa Barat",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 1,
                        "wrap": true,
                        "gravity": "center"
                      }
                    ]
                  }
                ]
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "sm"
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Click Here",
                  "uri": "https://pikobar.jabarprov.go.id/"
                },
                "height": "sm",
                "style": "link",
                "color": "#4287f5"
              }
            ],
            "backgroundColor": "#262626",
            "paddingAll": "5px"
          },
          "styles": {
            "header": {
              "separator": false
            }
          }
        },
        {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Regional Info",
                "size": "xs",
                "color": "#FFFFFF",
                "weight": "bold"
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "none",
            "margin": "none",
            "paddingBottom": "10px",
            "paddingTop": "10px"
          },
          "hero": {
            "type": "image",
            "url": "https://corona.jogjaprov.go.id/images/logos/logo-white.png",
            "size": "full",
            "aspectRatio": "21:9",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Jogjakarta COVID-19 Site",
                "weight": "bold",
                "size": "md",
                "margin": "none",
                "color": "#FFFFFF"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xs",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Situs informasi COVID-19 milik pemerintah Jogjakarta",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 1,
                        "wrap": true,
                        "gravity": "center"
                      }
                    ]
                  }
                ]
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "sm"
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Click Here",
                  "uri": "https://corona.jogjaprov.go.id/"
                },
                "height": "sm",
                "style": "link",
                "color": "#4287f5"
              }
            ],
            "backgroundColor": "#262626",
            "paddingAll": "5px"
          },
          "styles": {
            "header": {
              "separator": false
            },
            "hero": {
              "backgroundColor": "#232323"
            }
          }
        },
        {
          "type": "bubble",
          "header": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Regional Info",
                "size": "xs",
                "color": "#FFFFFF",
                "weight": "bold"
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "none",
            "margin": "none",
            "paddingBottom": "10px",
            "paddingTop": "10px"
          },
          "hero": {
            "type": "image",
            "size": "full",
            "aspectRatio": "21:9",
            "aspectMode": "fit",
            "url": "https://corona.jatengprov.go.id/assets/logo_jateng.png"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Jawa Tengah COVID-19 Site",
                "weight": "bold",
                "size": "md",
                "margin": "none",
                "color": "#FFFFFF"
              },
              {
                "type": "box",
                "layout": "vertical",
                "margin": "xs",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Situs informasi COVID-19 milik pemerintah Jawa Tengah",
                        "color": "#aaaaaa",
                        "size": "sm",
                        "flex": 1,
                        "wrap": true,
                        "gravity": "center"
                      }
                    ]
                  }
                ]
              }
            ],
            "backgroundColor": "#121212",
            "spacing": "sm"
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Click Here",
                  "uri": "https://corona.jatengprov.go.id/"
                },
                "height": "sm",
                "style": "link",
                "color": "#4287f5"
              }
            ],
            "backgroundColor": "#262626",
            "paddingAll": "5px"
          },
          "styles": {
            "header": {
              "separator": false
            },
            "hero": {
              "backgroundColor": "#FFFFFF"
            }
          }
        }
      ]
    }
  }
  return reply;
}

function regionalMenu() {
  var reply = {
    "type": "flex",
    "altText": "Menu Kasus Provinsi",
    "contents": {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://geotimes.co.id/wp-content/uploads/2020/03/1_4837302.jpg",
        "size": "full",
        "aspectRatio": "21:9",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Kasus COVID-19 \nBerdasarkan Provinsi",
            "weight": "bold",
            "size": "md",
            "wrap": true,
            "color": "#FFFFFF",
            "align": "center"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "margin": "sm",
                "spacing": "md",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "Pulau Jawa",
                      "text": "c!regional jawa"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#4287f5"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "Pulau Sumatera",
                      "text": "c!regional sumatera"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#4287f5"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "Pulau Kalimantan",
                      "text": "c!regional kalimantan"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#4287f5"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "Pulau Sulawesi",
                      "text": "c!regional sulawesi"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#4287f5"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "Pulau Papua",
                      "text": "c!regional papua"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#4287f5"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "NTT dan NTB",
                      "text": "c!regional nt"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#4287f5"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "Maluku",
                      "text": "c!regional maluku"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#4287f5"
                  }
                ]
              }
            ],
            "spacing": "sm"
          }
        ],
        "spacing": "md",
        "backgroundColor": "#121212"
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Silahkan pilih regional.",
            "size": "xxs",
            "align": "center",
            "color": "#FFFFFF",
            "weight": "regular"
          }
        ],
        "backgroundColor": "#262626"
      }
    }
  }
  return reply;
}

function regionalJawa(data) {
  var banten = lodash.filter(data, data => data.attributes['Provinsi'] == "Banten")
  var jabar = lodash.filter(data, data => data.attributes['Provinsi'] == "Jawa Barat")
  var dki = lodash.filter(data, data => data.attributes['Provinsi'] == "DKI Jakarta")
  var jateng = lodash.filter(data, data => data.attributes['Provinsi'] == "Jawa Tengah")
  var jatim = lodash.filter(data, data => data.attributes['Provinsi'] == "Jawa Timur")
  var diy = lodash.filter(data, data => data.attributes['Provinsi'] == "Daerah Istimewa Yogyakarta")
  var bali = lodash.filter(data, data => data.attributes['Provinsi'] == "Bali")
  var reply = {
      "type": "flex",
      "altText": "Data Provinsi",
      "contents": {
          "type": "carousel",
          "contents": [
            {
              "type": "bubble",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Regional Jawa",
                    "size": "xs",
                    "color": "#FFFFFF",
                    "weight": "bold"
                  }
                ],
                "margin": "xs",
                "paddingTop": "5px",
                "paddingBottom": "5px",
                "backgroundColor": "#262626"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Banten",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": banten[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": banten[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": banten[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Jawa Barat",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jabar[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jabar[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jabar[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  }
                ],
                "backgroundColor": "#121212"
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "spacer",
                    "size": "sm"
                  }
                ],
                "flex": 0,
                "backgroundColor": "#262626"
              }
            },
            {
              "type": "bubble",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Regional Jawa",
                    "size": "xs",
                    "color": "#FFFFFF",
                    "weight": "bold"
                  }
                ],
                "margin": "xs",
                "paddingTop": "5px",
                "paddingBottom": "5px",
                "backgroundColor": "#262626"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "DKI Jakarta",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": dki[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": dki[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": dki[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Jawa Tengah",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jateng[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jateng[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jateng[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  }
                ],
                "backgroundColor": "#121212"
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "spacer",
                    "size": "sm"
                  }
                ],
                "flex": 0,
                "backgroundColor": "#262626"
              }
            },
            {
              "type": "bubble",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Regional Jawa",
                    "size": "xs",
                    "color": "#FFFFFF",
                    "weight": "bold"
                  }
                ],
                "margin": "xs",
                "paddingTop": "5px",
                "paddingBottom": "5px",
                "backgroundColor": "#262626"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "DI Yogyakarta",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": diy[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": diy[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": diy[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Jawa Timur",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jatim[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jatim[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jatim[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  }
                ],
                "backgroundColor": "#121212"
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "spacer",
                    "size": "sm"
                  }
                ],
                "flex": 0,
                "backgroundColor": "#262626"
              }
            },
            {
              "type": "bubble",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Regional Jawa",
                    "size": "xs",
                    "color": "#FFFFFF",
                    "weight": "bold"
                  }
                ],
                "margin": "xs",
                "paddingTop": "5px",
                "paddingBottom": "5px",
                "backgroundColor": "#262626"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Bali",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": bali[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": bali[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": bali[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  }
                ],
                "backgroundColor": "#121212"
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "spacer",
                    "size": "sm"
                  }
                ],
                "flex": 0,
                "backgroundColor": "#262626"
              }
            }
          ]
        }
  }  
  return reply
}

function regionalSumatera(data) {
  var sumut = lodash.filter(data, data => data.attributes['Provinsi'] == "Sumatera Utara")
  var sumsel = lodash.filter(data, data => data.attributes['Provinsi'] == "Sumatera Selatan")
  var sumbar = lodash.filter(data, data => data.attributes['Provinsi'] == "Sumatera Barat")
  var riau = lodash.filter(data, data => data.attributes['Provinsi'] == "Riau")
  var jambi = lodash.filter(data, data => data.attributes['Provinsi'] == "Jambi")
  var aceh = lodash.filter(data, data => data.attributes['Provinsi'] == "Aceh")
  var lampung = lodash.filter(data, data => data.attributes['Provinsi'] == "Lampung")
  var bengkulu = lodash.filter(data, data => data.attributes['Provinsi'] == "Bengkulu")
  var bangka = lodash.filter(data, data => data.attributes['Provinsi'] == "Kepulauan Bangka Belitung")
  var kepriau = lodash.filter(data, data => data.attributes['Provinsi'] == "Kepulauan Riau")


  var reply = {
      "type": "flex",
      "altText": "Data Provinsi",
      "contents": {
          "type": "carousel",
          "contents": [
            {
              "type": "bubble",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Regional Sumatera",
                    "size": "xs",
                    "color": "#FFFFFF",
                    "weight": "bold"
                  }
                ],
                "margin": "xs",
                "paddingTop": "5px",
                "paddingBottom": "5px",
                "backgroundColor": "#262626"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Sumatera Utara",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": sumut[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": sumut[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": sumut[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Sumatera Selatan",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": sumsel[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": sumsel[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": sumsel[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  }
                ],
                "backgroundColor": "#121212"
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "spacer",
                    "size": "sm"
                  }
                ],
                "flex": 0,
                "backgroundColor": "#262626"
              }
            },
            {
              "type": "bubble",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Regional Sumatera",
                    "size": "xs",
                    "color": "#FFFFFF",
                    "weight": "bold"
                  }
                ],
                "margin": "xs",
                "paddingTop": "5px",
                "paddingBottom": "5px",
                "backgroundColor": "#262626"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Sumatera Barat",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": sumbar[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": sumbar[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": sumbar[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Riau",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": riau[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": riau[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": riau[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  }
                ],
                "backgroundColor": "#121212"
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "spacer",
                    "size": "sm"
                  }
                ],
                "flex": 0,
                "backgroundColor": "#262626"
              }
            },
            {
              "type": "bubble",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Regional Sumatera",
                    "size": "xs",
                    "color": "#FFFFFF",
                    "weight": "bold"
                  }
                ],
                "margin": "xs",
                "paddingTop": "5px",
                "paddingBottom": "5px",
                "backgroundColor": "#262626"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Jambi",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jambi[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jambi[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": jambi[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Aceh",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": aceh[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": aceh[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": aceh[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  }
                ],
                "backgroundColor": "#121212"
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "spacer",
                    "size": "sm"
                  }
                ],
                "flex": 0,
                "backgroundColor": "#262626"
              }
            },
            {
              "type": "bubble",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Regional Sumatera",
                    "size": "xs",
                    "color": "#FFFFFF",
                    "weight": "bold"
                  },
                ],
                "margin": "xs",
                "paddingTop": "5px",
                "paddingBottom": "5px",
                "backgroundColor": "#262626"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "lg",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Bengkulu",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": bengkulu[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": bengkulu[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": bengkulu[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Lampung",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": lampung[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": lampung[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": lampung[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }
                    ]
                  }
                ],
                "backgroundColor": "#121212"
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "spacer",
                    "size": "sm"
                  }
                ],
                "flex": 0,
                "backgroundColor": "#262626"
              }
            },
            {
              "type": "bubble",
              "header": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": "Data Regional Sumatera",
                    "size": "xs",
                    "color": "#FFFFFF",
                    "weight": "bold"
                  }
                  
                ],
                "margin": "xs",
                "paddingTop": "5px",
                "paddingBottom": "5px",
                "backgroundColor": "#262626"
              },
              "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "box",
                    "layout": "vertical",
                    "margin": "md",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Kepulauan Riau",
                        "weight": "bold",
                        "size": "md",
                        "color": "#FFFFFF"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Positif",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": kepriau[0].attributes['Kasus_Posi'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Meninggal",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": kepriau[0].attributes['Kasus_Meni'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kasus Sembuh",
                            "color": "#aaaaaa",
                            "size": "sm",
                            "flex": 1
                          },
                          {
                            "type": "text",
                            "text": kepriau[0].attributes['Kasus_Semb'].toLocaleString(),
                            "wrap": true,
                            "color": "#FFFFFF",
                            "size": "sm",
                            "flex": 5
                          }
                        ]
                      }, 
                      {
                        "type": "box",
                        "layout": "vertical",
                        "margin": "lg",
                        "spacing": "sm",
                        "contents": [
                          {
                            "type": "text",
                            "text": "Kepulauan Bangka Belitung",
                            "weight": "bold",
                            "size": "md",
                            "color": "#FFFFFF"
                          },
                          {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "sm",
                            "contents": [
                              {
                                "type": "text",
                                "text": "Kasus Positif",
                                "color": "#aaaaaa",
                                "size": "sm",
                                "flex": 1
                              },
                              {
                                "type": "text",
                                "text": bangka[0].attributes['Kasus_Posi'].toLocaleString(),
                                "wrap": true,
                                "color": "#FFFFFF",
                                "size": "sm",
                                "flex": 5
                              }
                            ]
                          },
                          {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "sm",
                            "contents": [
                              {
                                "type": "text",
                                "text": "Kasus Meninggal",
                                "color": "#aaaaaa",
                                "size": "sm",
                                "flex": 1
                              },
                              {
                                "type": "text",
                                "text": bangka[0].attributes['Kasus_Meni'].toLocaleString(),
                                "wrap": true,
                                "color": "#FFFFFF",
                                "size": "sm",
                                "flex": 5
                              }
                            ]
                          },
                          {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "sm",
                            "contents": [
                              {
                                "type": "text",
                                "text": "Kasus Sembuh",
                                "color": "#aaaaaa",
                                "size": "sm",
                                "flex": 1
                              },
                              {
                                "type": "text",
                                "text": bangka[0].attributes['Kasus_Semb'].toLocaleString(),
                                "wrap": true,
                                "color": "#FFFFFF",
                                "size": "sm",
                                "flex": 5
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "backgroundColor": "#121212"
              },
              "footer": {
                "type": "box",
                "layout": "vertical",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "spacer",
                    "size": "sm"
                  }
                ],
                "flex": 0,
                "backgroundColor": "#262626"
              }
            }
          ]
        }
  }  
  return reply
}

function regionalKalimantan(data) {
  var kalteng = lodash.filter(data, data => data.attributes['Provinsi'] == "Kalimantan Tengah")
  var kaltim = lodash.filter(data, data => data.attributes['Provinsi'] == "Kalimantan Timur")
  var kalut = lodash.filter(data, data => data.attributes['Provinsi'] == "Kalimantan Utara")
  var kalsel = lodash.filter(data, data => data.attributes['Provinsi'] == "Kalimantan Selatan")
  var kalbar = lodash.filter(data, data => data.attributes['Provinsi'] == "Kalimantan Barat")

  var reply = {
    "type": "flex",
    "altText": "Data Provinsi",
    "contents": {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Data Regional Kalimantan",
                  "size": "xs",
                  "color": "#FFFFFF",
                  "weight": "bold"
                }
              ],
              "margin": "xs",
              "paddingTop": "5px",
              "paddingBottom": "5px",
              "backgroundColor": "#262626"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Kalimantan Tengah",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalteng[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalteng[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalteng[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "lg",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Kalimantan Timur",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kaltim[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kaltim[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kaltim[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "backgroundColor": "#121212"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "spacer",
                  "size": "sm"
                }
              ],
              "flex": 0,
              "backgroundColor": "#262626"
            }
          },
          {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Data Regional Kalimantan",
                  "size": "xs",
                  "color": "#FFFFFF",
                  "weight": "bold"
                }
              ],
              "margin": "xs",
              "paddingTop": "5px",
              "paddingBottom": "5px",
              "backgroundColor": "#262626"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Kalimantan Utara",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalut[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalut[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalut[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "lg",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Kalimantan Selatan",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalsel[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalsel[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalsel[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "backgroundColor": "#121212"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "spacer",
                  "size": "sm"
                }
              ],
              "flex": 0,
              "backgroundColor": "#262626"
            }
          },
          {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Data Regional Kalimantan",
                  "size": "xs",
                  "color": "#FFFFFF",
                  "weight": "bold"
                }
              ],
              "margin": "xs",
              "paddingTop": "5px",
              "paddingBottom": "5px",
              "backgroundColor": "#262626"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Kalimantan Barat",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalbar[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalbar[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": kalbar[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "backgroundColor": "#121212"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "spacer",
                  "size": "sm"
                }
              ],
              "flex": 0,
              "backgroundColor": "#262626"
            }
          }
        ]
      }
}  
return reply;
}

function regionalSulawesi(data) {
  var sulbar = lodash.filter(data, data => data.attributes['Provinsi'] == "Sulawesi Barat")
  var sulut = lodash.filter(data, data => data.attributes['Provinsi'] == "Sulawesi Utara")
  var sultengah = lodash.filter(data, data => data.attributes['Provinsi'] == "Sulawesi Tengah")
  var sulsel = lodash.filter(data, data => data.attributes['Provinsi'] == "Sulawesi Selatan")
  var sultengg = lodash.filter(data, data => data.attributes['Provinsi'] == "Sulawesi Tenggara")
  var gorontalo = lodash.filter(data, data => data.attributes['Provinsi'] == "Gorontalo")


  var reply = {
    "type": "flex",
    "altText": "Data Provinsi",
    "contents": {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Data Regional Sulawesi",
                  "size": "xs",
                  "color": "#FFFFFF",
                  "weight": "bold"
                }
              ],
              "margin": "xs",
              "paddingTop": "5px",
              "paddingBottom": "5px",
              "backgroundColor": "#262626"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Sulawesi Barat",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sulbar[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sulbar[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sulbar[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "lg",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Sulawesi Utara",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sulut[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sulut[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sulut[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "backgroundColor": "#121212"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "spacer",
                  "size": "sm"
                }
              ],
              "flex": 0,
              "backgroundColor": "#262626"
            }
          },
          {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Data Regional Sulawesi",
                  "size": "xs",
                  "color": "#FFFFFF",
                  "weight": "bold"
                }
              ],
              "margin": "xs",
              "paddingTop": "5px",
              "paddingBottom": "5px",
              "backgroundColor": "#262626"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Sulawesi Tengah",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sultengah[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sultengah[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sultengah[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "lg",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Sulawesi Selatan",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sulsel[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sulsel[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sulsel[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "backgroundColor": "#121212"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "spacer",
                  "size": "sm"
                }
              ],
              "flex": 0,
              "backgroundColor": "#262626"
            }
          },
          {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Data Regional Sulawesi",
                  "size": "xs",
                  "color": "#FFFFFF",
                  "weight": "bold"
                }
              ],
              "margin": "xs",
              "paddingTop": "5px",
              "paddingBottom": "5px",
              "backgroundColor": "#262626"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Sulawesi Tenggara",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sultengg[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sultengg[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": sultengg[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Gorontalo",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": gorontalo[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": gorontalo[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": gorontalo[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "backgroundColor": "#121212"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "spacer",
                  "size": "sm"
                }
              ],
              "flex": 0,
              "backgroundColor": "#262626"
            }
          }
        ]
      }
}  
return reply;
}

function regionalPapua(data) {
  var papua = lodash.filter(data, data => data.attributes['Provinsi'] == "Papua")
  var papuabarat = lodash.filter(data, data => data.attributes['Provinsi'] == "Papua Barat")
  

  var reply = {
    "type": "flex",
    "altText": "Data Provinsi",
    "contents": {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Data Regional Papua",
                  "size": "xs",
                  "color": "#FFFFFF",
                  "weight": "bold"
                }
              ],
              "margin": "xs",
              "paddingTop": "5px",
              "paddingBottom": "5px",
              "backgroundColor": "#262626"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Papua",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": papua[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": papua[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": papua[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "lg",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Papua Barat",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": papuabarat[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": papuabarat[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": papuabarat[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "backgroundColor": "#121212"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "spacer",
                  "size": "sm"
                }
              ],
              "flex": 0,
              "backgroundColor": "#262626"
            }
          },
        ]
      }
  }  
  return reply;
}

function regionalNT(data) {
  var ntt = lodash.filter(data, data => data.attributes['Provinsi'] == "Nusa Tenggara Timur")
  var ntb = lodash.filter(data, data => data.attributes['Provinsi'] == "Nusa Tenggara Barat")
  

  var reply = {
    "type": "flex",
    "altText": "Data Provinsi",
    "contents": {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Data Regional Nusa Tenggara",
                  "size": "xs",
                  "color": "#FFFFFF",
                  "weight": "bold"
                }
              ],
              "margin": "xs",
              "paddingTop": "5px",
              "paddingBottom": "5px",
              "backgroundColor": "#262626"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Nusa Tenggara Timur",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": ntt[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": ntt[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": ntt[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "lg",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Nusa Tenggara Barat",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": ntb[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": ntb[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": ntb[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "backgroundColor": "#121212"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "spacer",
                  "size": "sm"
                }
              ],
              "flex": 0,
              "backgroundColor": "#262626"
            }
          },
        ]
      }
  }  
  return reply;
}

function regionalMaluku(data) {
  var malukuutara = lodash.filter(data, data => data.attributes['Provinsi'] == "Maluku Utara")
  var maluku = lodash.filter(data, data => data.attributes['Provinsi'] == "Maluku")
  

  var reply = {
    "type": "flex",
    "altText": "Data Provinsi",
    "contents": {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "header": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Data Regional Maluku",
                  "size": "xs",
                  "color": "#FFFFFF",
                  "weight": "bold"
                }
              ],
              "margin": "xs",
              "paddingTop": "5px",
              "paddingBottom": "5px",
              "backgroundColor": "#262626"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "md",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Maluku",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": maluku[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": maluku[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": maluku[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "margin": "lg",
                  "spacing": "sm",
                  "contents": [
                    {
                      "type": "text",
                      "text": "Maluku Utara",
                      "weight": "bold",
                      "size": "md",
                      "color": "#FFFFFF"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Positif",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": malukuutara[0].attributes['Kasus_Posi'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Meninggal",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": malukuutara[0].attributes['Kasus_Meni'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "spacing": "sm",
                      "contents": [
                        {
                          "type": "text",
                          "text": "Kasus Sembuh",
                          "color": "#aaaaaa",
                          "size": "sm",
                          "flex": 1
                        },
                        {
                          "type": "text",
                          "text": malukuutara[0].attributes['Kasus_Semb'].toLocaleString(),
                          "wrap": true,
                          "color": "#FFFFFF",
                          "size": "sm",
                          "flex": 5
                        }
                      ]
                    }
                  ]
                }
              ],
              "backgroundColor": "#121212"
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
                {
                  "type": "spacer",
                  "size": "sm"
                }
              ],
              "flex": 0,
              "backgroundColor": "#262626"
            }
          },
        ]
      }
  }  
  return reply;
}

function botMenu() {
  var reply = {
    "type": "flex",
    "altText": "Main Menu",
    "contents": {
      "type": "bubble",
      "hero": {
        "type": "image",
        "url": "https://geotimes.co.id/wp-content/uploads/2020/03/1_4837302.jpg",
        "size": "full",
        "aspectRatio": "21:9",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "http://linecorp.com/"
        }
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "Bot Informasi COVID-19",
            "weight": "bold",
            "size": "md",
            "wrap": true,
            "color": "#FFFFFF",
            "align": "start"
          },
          {
            "type": "text",
            "text": "Silahkan pilih command yang diinginkan.",
            "weight": "regular",
            "size": "sm",
            "wrap": true,
            "color": "#FFFFFF",
            "align": "start"
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "margin": "sm",
                "spacing": "md",
                "contents": [
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "Informasi COVID-19",
                      "text": "c!info"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#4287f5"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "Data Kasus Global",
                      "text": "c!cases"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#4287f5"
                  },
                  {
                    "type": "button",
                    "action": {
                      "type": "message",
                      "label": "Data Kasus Per Provinsi",
                      "text": "c!regional"
                    },
                    "style": "link",
                    "height": "sm",
                    "color": "#4287f5"
                  }
                ]
              }
            ],
            "spacing": "sm"
          }
        ],
        "spacing": "md",
        "backgroundColor": "#121212"
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "size": "xxs",
            "align": "center",
            "color": "#FFFFFF",
            "weight": "regular",
            "text": "Based on Government and Open-Source APIs"
          }
        ],
        "backgroundColor": "#262626"
      }
    }
  }
  return reply;
}


module.exports = {
    countryTemplate: countryTemplate,
    globalTemplate: globalTemplate,
    generalTemplate: generalTemplate,
    infoMenu: infoMenu,
    regionalTemplate: regionalTemplate,
    regionalMenu: regionalMenu,
    regionalJawa: regionalJawa,
    regionalSumatera: regionalSumatera,
    regionalKalimantan: regionalKalimantan,
    regionalSulawesi: regionalSulawesi,
    regionalPapua: regionalPapua,
    regionalNT: regionalNT,
    regionalMaluku: regionalMaluku,
    botMenu: botMenu
}