window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "api",
          "arca.l",
          "arcalive.j",
          "index",
          "readm",
          "small"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "ArgumentError.html": [
          "argument",
          "argumenterror",
          "class",
          "error"
        ],
        "SessionError.html": [
          "class",
          "error",
          "session",
          "sessionerror"
        ],
        "FetchQueue.html": [
          "class",
          "fetch",
          "fetchqueu",
          "limit",
          "queue",
          "rate"
        ],
        "FetchQueue.html#_queue": [
          "_queue",
          "array.&lt;fetchtask&gt",
          "fetchqueue#_queu",
          "member"
        ],
        "FetchQueue.html#rateLimit": [
          "fetch",
          "fetchqueue#ratelimit",
          "limit",
          "member",
          "rate",
          "ratelimit"
        ],
        "FetchQueue.html#_next": [
          "_next",
          "fetch",
          "fetchqueue#_next",
          "fetchtask",
          "function"
        ],
        "FetchQueue.html#_fetchStep": [
          "_fetchstep",
          "fetch",
          "fetchqueue#_fetchstep",
          "function"
        ],
        "FetchQueue.html#setRateLimit": [
          "fetch",
          "fetchqueue#setratelimit",
          "function",
          "limit",
          "newlimit",
          "rate",
          "setratelimit"
        ],
        "FetchQueue.html#pause": [
          "fetch",
          "fetchqueue#paus",
          "function",
          "paus"
        ],
        "FetchQueue.html#resume": [
          "fetch",
          "fetchqueue#resum",
          "function",
          "resum"
        ],
        "FetchQueue.html#stop": [
          "fetch",
          "fetchqueue#stop",
          "function",
          "reject",
          "stop"
        ],
        "FetchQueue.html#fetch": [
          "fetch",
          "fetchqueue#fetch",
          "function",
          "init",
          "promise.&lt;response&gt",
          "resourc"
        ],
        "Article.html": [
          "articl",
          "class",
          "limit",
          "rate"
        ],
        "Article.html#_session": [
          "_session",
          "article#_sess",
          "member",
          "requestsess"
        ],
        "Article.html#_board": [
          "_board",
          "article#_board",
          "board",
          "member"
        ],
        "Article.html#_articleData": [
          "_articledata",
          "article#_articledata",
          "article.articledata",
          "member"
        ],
        "Article.html#read": [
          "article#read",
          "fetch",
          "function",
          "lt;async&gt",
          "option",
          "promise.&lt;article.articledata&gt",
          "read"
        ],
        "Article.html#delete": [
          "article#delet",
          "delet",
          "function",
          "lt;async&gt",
          "promise.&lt;response&gt"
        ],
        "Article.html#edit": [
          "articl",
          "article#edit",
          "edit",
          "function",
          "lt;async&gt",
          "promise.&lt;response&gt"
        ],
        "Article.html#blockUser": [
          "article#blockus",
          "blockus",
          "durat",
          "function",
          "lt;async&gt",
          "promise.&lt;response&gt"
        ],
        "Article.html#restrictCountry": [
          "article#restrictcountri",
          "countri",
          "function",
          "lt;async&gt",
          "promise.&lt;response&gt",
          "restrictcountri"
        ],
        "Article.html#writeComment": [
          "article#writecom",
          "articledata",
          "comment",
          "function",
          "lt;async&gt",
          "nocach",
          "promise.&lt;comment&gt",
          "read",
          "writecom"
        ],
        "Article.html#deleteComment": [
          "article#deletecom",
          "articledata",
          "commentid",
          "deletecom",
          "function",
          "nocach",
          "promise.&lt;response&gt",
          "read"
        ],
        "Article.html#editComment": [
          "article#editcom",
          "articledata",
          "comment",
          "commentid",
          "editcom",
          "function",
          "nocach",
          "promise.&lt;response&gt",
          "read"
        ],
        "Board.html": [
          "board",
          "class",
          "limit",
          "rate"
        ],
        "Board.html#_cacheSize": [
          "_caches",
          "board#_caches",
          "member"
        ],
        "Board.html#_session": [
          "_session",
          "board#_sess",
          "member"
        ],
        "Board.html#url": [
          "board#url",
          "member",
          "url"
        ],
        "Board.html#_cachedArticles": [
          "_cachedarticl",
          "board#_cachedarticl",
          "member"
        ],
        "Board.html#_cachedOrder": [
          "_cachedord",
          "board#_cachedord",
          "member"
        ],
        "Board.html#.defaultCacheSize": [
          "board",
          "board.defaultcaches",
          "defaultcaches",
          "lt;static&gt",
          "member"
        ],
        "Board.html#articleCacheSize": [
          "articlecaches",
          "board",
          "board#articlecaches",
          "member"
        ],
        "Board.html#getArticle": [
          "articl",
          "articleid",
          "board#getarticl",
          "function",
          "getarticl"
        ],
        "Board.html#readArticle": [
          "articl",
          "articleid",
          "board#readarticl",
          "function",
          "lt;async&gt",
          "option",
          "promise.&lt;article.articledata&gt",
          "readarticl"
        ],
        "Board.html#writeArticle": [
          "articl",
          "board#writearticl",
          "function",
          "lt;async&gt",
          "promise.&lt;article&gt",
          "writearticl"
        ],
        "Board.html#deleteArticle": [
          "articleid",
          "board#deletearticl",
          "deletearticl",
          "function",
          "promise.&lt;response&gt"
        ],
        "Board.html#editArticle": [
          "articl",
          "articleid",
          "board#editarticl",
          "editarticl",
          "function",
          "lt;async&gt",
          "promise.&lt;response&gt"
        ],
        "Board.html#queryPage": [
          "board#querypag",
          "function",
          "lt;async&gt",
          "option",
          "page",
          "promise.&lt;array.&lt;article&gt;&gt",
          "querypag"
        ],
        "Board.html#readPage": [
          "board#readpag",
          "function",
          "option",
          "page",
          "promise.&lt;array.&lt;article&gt;&gt",
          "querypag",
          "readpag"
        ],
        "Comment-Comment.CommentData.html": [
          "articledata",
          "class",
          "commentdata",
          "comment~comment.commentdata"
        ],
        "LoginSession.html": [
          "class",
          "loginsess"
        ],
        "LoginSession.html#_login": [
          "_login",
          "function",
          "loginsession#_login",
          "promise.&lt;response&gt"
        ],
        "LoginSession.html#_validateSession": [
          "_validatesess",
          "function",
          "loginsession#_validatesess",
          "lt;async&gt"
        ],
        "Article-Article.ArticleData.html": [
          "articledata",
          "article~article.articledata",
          "class"
        ]
      },
      "length": 47
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "a": {
          "docs": {},
          "p": {
            "docs": {},
            "i": {
              "docs": {
                "index.html": {
                  "ref": "index.html",
                  "tf": 23.333333333333332
                }
              }
            }
          },
          "r": {
            "docs": {},
            "c": {
              "docs": {},
              "a": {
                "docs": {},
                ".": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 23.333333333333332
                      }
                    }
                  }
                },
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "v": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        ".": {
                          "docs": {},
                          "j": {
                            "docs": {
                              "index.html": {
                                "ref": "index.html",
                                "tf": 600
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "ArgumentError.html": {
                            "ref": "ArgumentError.html",
                            "tf": 25
                          }
                        },
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "r": {
                                  "docs": {
                                    "ArgumentError.html": {
                                      "ref": "ArgumentError.html",
                                      "tf": 1900
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {},
                  ".": {
                    "docs": {},
                    "&": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ";": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "h": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "k": {
                                              "docs": {},
                                              "&": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "FetchQueue.html#_queue": {
                                                        "ref": "FetchQueue.html#_queue",
                                                        "tf": 50
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "c": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Article.html": {
                        "ref": "Article.html",
                        "tf": 1916.6666666666667
                      },
                      "Article.html#edit": {
                        "ref": "Article.html#edit",
                        "tf": 25
                      },
                      "Board.html#getArticle": {
                        "ref": "Board.html#getArticle",
                        "tf": 83.33333333333333
                      },
                      "Board.html#readArticle": {
                        "ref": "Board.html#readArticle",
                        "tf": 50
                      },
                      "Board.html#writeArticle": {
                        "ref": "Board.html#writeArticle",
                        "tf": 25
                      },
                      "Board.html#editArticle": {
                        "ref": "Board.html#editArticle",
                        "tf": 20
                      }
                    },
                    "e": {
                      "docs": {},
                      "#": {
                        "docs": {},
                        "_": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "Article.html#_session": {
                                      "ref": "Article.html#_session",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "b": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "Article.html#_board": {
                                        "ref": "Article.html#_board",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "a": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "a": {
                                                "docs": {
                                                  "Article.html#_articleData": {
                                                    "ref": "Article.html#_articleData",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "Article.html#read": {
                                    "ref": "Article.html#read",
                                    "tf": 1150
                                  }
                                }
                              }
                            },
                            "s": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {
                                                        "Article.html#restrictCountry": {
                                                          "ref": "Article.html#restrictCountry",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "d": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "Article.html#delete": {
                                      "ref": "Article.html#delete",
                                      "tf": 1150
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "m": {
                                          "docs": {
                                            "Article.html#deleteComment": {
                                              "ref": "Article.html#deleteComment",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "e": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Article.html#edit": {
                                    "ref": "Article.html#edit",
                                    "tf": 1150
                                  }
                                },
                                "c": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "m": {
                                      "docs": {
                                        "Article.html#editComment": {
                                          "ref": "Article.html#editComment",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "b": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "k": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "s": {
                                      "docs": {
                                        "Article.html#blockUser": {
                                          "ref": "Article.html#blockUser",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "w": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "m": {
                                        "docs": {
                                          "Article.html#writeComment": {
                                            "ref": "Article.html#writeComment",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      ".": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "a": {
                                              "docs": {
                                                "Article.html#_articleData": {
                                                  "ref": "Article.html#_articleData",
                                                  "tf": 50
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "d": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "a": {
                              "docs": {
                                "Article.html#writeComment": {
                                  "ref": "Article.html#writeComment",
                                  "tf": 16.666666666666664
                                },
                                "Article.html#deleteComment": {
                                  "ref": "Article.html#deleteComment",
                                  "tf": 16.666666666666664
                                },
                                "Article.html#editComment": {
                                  "ref": "Article.html#editComment",
                                  "tf": 16.666666666666664
                                },
                                "Comment-Comment.CommentData.html": {
                                  "ref": "Comment-Comment.CommentData.html",
                                  "tf": 50
                                },
                                "Article-Article.ArticleData.html": {
                                  "ref": "Article-Article.ArticleData.html",
                                  "tf": 800
                                }
                              }
                            }
                          }
                        }
                      },
                      "c": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "Board.html#articleCacheSize": {
                                      "ref": "Board.html#articleCacheSize",
                                      "tf": 750
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "i": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "Board.html#getArticle": {
                              "ref": "Board.html#getArticle",
                              "tf": 33.33333333333333
                            },
                            "Board.html#readArticle": {
                              "ref": "Board.html#readArticle",
                              "tf": 20
                            },
                            "Board.html#deleteArticle": {
                              "ref": "Board.html#deleteArticle",
                              "tf": 33.33333333333333
                            },
                            "Board.html#editArticle": {
                              "ref": "Board.html#editArticle",
                              "tf": 20
                            }
                          }
                        }
                      },
                      "~": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      ".": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {
                                                                "Article-Article.ArticleData.html": {
                                                                  "ref": "Article-Article.ArticleData.html",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "t": {
                "docs": {
                  "FetchQueue.html#fetch": {
                    "ref": "FetchQueue.html#fetch",
                    "tf": 25
                  }
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {
                  "Article.html#read": {
                    "ref": "Article.html#read",
                    "tf": 675
                  },
                  "Article.html#writeComment": {
                    "ref": "Article.html#writeComment",
                    "tf": 16.666666666666664
                  },
                  "Article.html#deleteComment": {
                    "ref": "Article.html#deleteComment",
                    "tf": 16.666666666666664
                  },
                  "Article.html#editComment": {
                    "ref": "Article.html#editComment",
                    "tf": 16.666666666666664
                  }
                },
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                },
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Board.html#readArticle": {
                                "ref": "Board.html#readArticle",
                                "tf": 670
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "p": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "g": {
                      "docs": {
                        "Board.html#readPage": {
                          "ref": "Board.html#readPage",
                          "tf": 675
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {
                    "FetchQueue.html#resume": {
                      "ref": "FetchQueue.html#resume",
                      "tf": 750
                    }
                  }
                }
              },
              "o": {
                "docs": {},
                "u": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "FetchQueue.html#fetch": {
                          "ref": "FetchQueue.html#fetch",
                          "tf": 25
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "i": {
                                      "docs": {
                                        "Article.html#restrictCountry": {
                                          "ref": "Article.html#restrictCountry",
                                          "tf": 675
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "FetchQueue.html#stop": {
                        "ref": "FetchQueue.html#stop",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            },
            "q": {
              "docs": {},
              "u": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "Article.html#_session": {
                                  "ref": "Article.html#_session",
                                  "tf": 50
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "e": {
                "docs": {
                  "FetchQueue.html": {
                    "ref": "FetchQueue.html",
                    "tf": 12.5
                  },
                  "FetchQueue.html#rateLimit": {
                    "ref": "FetchQueue.html#rateLimit",
                    "tf": 16.666666666666664
                  },
                  "FetchQueue.html#setRateLimit": {
                    "ref": "FetchQueue.html#setRateLimit",
                    "tf": 16.666666666666664
                  },
                  "Article.html": {
                    "ref": "Article.html",
                    "tf": 16.666666666666664
                  },
                  "Board.html": {
                    "ref": "Board.html",
                    "tf": 16.666666666666664
                  }
                },
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "FetchQueue.html#rateLimit": {
                              "ref": "FetchQueue.html#rateLimit",
                              "tf": 750
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "m": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "l": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 23.333333333333332
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "s": {
              "docs": {},
              "s": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "SessionError.html": {
                          "ref": "SessionError.html",
                          "tf": 25
                        }
                      },
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "r": {
                                "docs": {
                                  "SessionError.html": {
                                    "ref": "SessionError.html",
                                    "tf": 1900
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "r": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "FetchQueue.html#setRateLimit": {
                                    "ref": "FetchQueue.html#setRateLimit",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "o": {
              "docs": {},
              "p": {
                "docs": {
                  "FetchQueue.html#stop": {
                    "ref": "FetchQueue.html#stop",
                    "tf": 750
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "Article.html#delete": {
                      "ref": "Article.html#delete",
                      "tf": 683.3333333333334
                    }
                  },
                  "e": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "Article.html#deleteComment": {
                              "ref": "Article.html#deleteComment",
                              "tf": 683.3333333333334
                            }
                          }
                        }
                      }
                    },
                    "a": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "l": {
                                "docs": {
                                  "Board.html#deleteArticle": {
                                    "ref": "Board.html#deleteArticle",
                                    "tf": 683.3333333333334
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "a": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "Board.html#.defaultCacheSize": {
                                      "ref": "Board.html#.defaultCacheSize",
                                      "tf": 700
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "r": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "Article.html#blockUser": {
                      "ref": "Article.html#blockUser",
                      "tf": 25
                    }
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "r": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "l": {
                          "docs": {
                            "Board.html#getArticle": {
                              "ref": "Board.html#getArticle",
                              "tf": 683.3333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "ArgumentError.html": {
                      "ref": "ArgumentError.html",
                      "tf": 110
                    },
                    "SessionError.html": {
                      "ref": "SessionError.html",
                      "tf": 110
                    },
                    "FetchQueue.html": {
                      "ref": "FetchQueue.html",
                      "tf": 110
                    },
                    "Article.html": {
                      "ref": "Article.html",
                      "tf": 110
                    },
                    "Board.html": {
                      "ref": "Board.html",
                      "tf": 110
                    },
                    "Comment-Comment.CommentData.html": {
                      "ref": "Comment-Comment.CommentData.html",
                      "tf": 110
                    },
                    "LoginSession.html": {
                      "ref": "LoginSession.html",
                      "tf": 110
                    },
                    "Article-Article.ArticleData.html": {
                      "ref": "Article-Article.ArticleData.html",
                      "tf": 110
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "Article.html#restrictCountry": {
                          "ref": "Article.html#restrictCountry",
                          "tf": 25
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Article.html#writeComment": {
                          "ref": "Article.html#writeComment",
                          "tf": 25
                        },
                        "Article.html#editComment": {
                          "ref": "Article.html#editComment",
                          "tf": 25
                        }
                      },
                      "i": {
                        "docs": {},
                        "d": {
                          "docs": {
                            "Article.html#deleteComment": {
                              "ref": "Article.html#deleteComment",
                              "tf": 33.33333333333333
                            },
                            "Article.html#editComment": {
                              "ref": "Article.html#editComment",
                              "tf": 25
                            }
                          }
                        }
                      },
                      "d": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "a": {
                              "docs": {
                                "Comment-Comment.CommentData.html": {
                                  "ref": "Comment-Comment.CommentData.html",
                                  "tf": 750
                                }
                              }
                            }
                          }
                        }
                      },
                      "~": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      ".": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "m": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {
                                                                "Comment-Comment.CommentData.html": {
                                                                  "ref": "Comment-Comment.CommentData.html",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "i": {
                "docs": {},
                "t": {
                  "docs": {
                    "FetchQueue.html": {
                      "ref": "FetchQueue.html",
                      "tf": 12.5
                    },
                    "FetchQueue.html#rateLimit": {
                      "ref": "FetchQueue.html#rateLimit",
                      "tf": 16.666666666666664
                    },
                    "FetchQueue.html#setRateLimit": {
                      "ref": "FetchQueue.html#setRateLimit",
                      "tf": 16.666666666666664
                    },
                    "Article.html": {
                      "ref": "Article.html",
                      "tf": 16.666666666666664
                    },
                    "Board.html": {
                      "ref": "Board.html",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "a": {
                "docs": {},
                "s": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "t": {
                              "docs": {
                                "Article.html#read": {
                                  "ref": "Article.html#read",
                                  "tf": 25
                                },
                                "Article.html#delete": {
                                  "ref": "Article.html#delete",
                                  "tf": 33.33333333333333
                                },
                                "Article.html#edit": {
                                  "ref": "Article.html#edit",
                                  "tf": 25
                                },
                                "Article.html#blockUser": {
                                  "ref": "Article.html#blockUser",
                                  "tf": 25
                                },
                                "Article.html#restrictCountry": {
                                  "ref": "Article.html#restrictCountry",
                                  "tf": 25
                                },
                                "Article.html#writeComment": {
                                  "ref": "Article.html#writeComment",
                                  "tf": 25
                                },
                                "Board.html#readArticle": {
                                  "ref": "Board.html#readArticle",
                                  "tf": 20
                                },
                                "Board.html#writeArticle": {
                                  "ref": "Board.html#writeArticle",
                                  "tf": 25
                                },
                                "Board.html#editArticle": {
                                  "ref": "Board.html#editArticle",
                                  "tf": 20
                                },
                                "Board.html#queryPage": {
                                  "ref": "Board.html#queryPage",
                                  "tf": 20
                                },
                                "LoginSession.html#_validateSession": {
                                  "ref": "LoginSession.html#_validateSession",
                                  "tf": 50
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "&": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Board.html#.defaultCacheSize": {
                                    "ref": "Board.html#.defaultCacheSize",
                                    "tf": 50
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "g": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "s": {
                          "docs": {
                            "LoginSession.html": {
                              "ref": "LoginSession.html",
                              "tf": 1950
                            }
                          },
                          "i": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "#": {
                                  "docs": {},
                                  "_": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "n": {
                                              "docs": {
                                                "LoginSession.html#_login": {
                                                  "ref": "LoginSession.html#_login",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "v": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {
                                                              "LoginSession.html#_validateSession": {
                                                                "ref": "LoginSession.html#_validateSession",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "ArgumentError.html": {
                      "ref": "ArgumentError.html",
                      "tf": 25
                    },
                    "SessionError.html": {
                      "ref": "SessionError.html",
                      "tf": 25
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {},
            "i": {
              "docs": {},
              "t": {
                "docs": {
                  "Article.html#edit": {
                    "ref": "Article.html#edit",
                    "tf": 675
                  }
                },
                "c": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "Article.html#editComment": {
                          "ref": "Article.html#editComment",
                          "tf": 675
                        }
                      }
                    }
                  }
                },
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Board.html#editArticle": {
                                "ref": "Board.html#editArticle",
                                "tf": 670
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "FetchQueue.html": {
                      "ref": "FetchQueue.html",
                      "tf": 12.5
                    },
                    "FetchQueue.html#rateLimit": {
                      "ref": "FetchQueue.html#rateLimit",
                      "tf": 16.666666666666664
                    },
                    "FetchQueue.html#_next": {
                      "ref": "FetchQueue.html#_next",
                      "tf": 50
                    },
                    "FetchQueue.html#_fetchStep": {
                      "ref": "FetchQueue.html#_fetchStep",
                      "tf": 50
                    },
                    "FetchQueue.html#setRateLimit": {
                      "ref": "FetchQueue.html#setRateLimit",
                      "tf": 16.666666666666664
                    },
                    "FetchQueue.html#pause": {
                      "ref": "FetchQueue.html#pause",
                      "tf": 50
                    },
                    "FetchQueue.html#resume": {
                      "ref": "FetchQueue.html#resume",
                      "tf": 50
                    },
                    "FetchQueue.html#stop": {
                      "ref": "FetchQueue.html#stop",
                      "tf": 33.33333333333333
                    },
                    "FetchQueue.html#fetch": {
                      "ref": "FetchQueue.html#fetch",
                      "tf": 725
                    },
                    "Article.html#read": {
                      "ref": "Article.html#read",
                      "tf": 50
                    }
                  },
                  "q": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "u": {
                          "docs": {
                            "FetchQueue.html": {
                              "ref": "FetchQueue.html",
                              "tf": 1900
                            }
                          },
                          "e": {
                            "docs": {},
                            "#": {
                              "docs": {},
                              "_": {
                                "docs": {},
                                "q": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "u": {
                                        "docs": {
                                          "FetchQueue.html#_queue": {
                                            "ref": "FetchQueue.html#_queue",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "n": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "x": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "FetchQueue.html#_next": {
                                            "ref": "FetchQueue.html#_next",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "f": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "p": {
                                                  "docs": {
                                                    "FetchQueue.html#_fetchStep": {
                                                      "ref": "FetchQueue.html#_fetchStep",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "r": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "FetchQueue.html#rateLimit": {
                                                    "ref": "FetchQueue.html#rateLimit",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "m": {
                                        "docs": {
                                          "FetchQueue.html#resume": {
                                            "ref": "FetchQueue.html#resume",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "s": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "FetchQueue.html#setRateLimit": {
                                                          "ref": "FetchQueue.html#setRateLimit",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "t": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "p": {
                                      "docs": {
                                        "FetchQueue.html#stop": {
                                          "ref": "FetchQueue.html#stop",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "p": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "s": {
                                      "docs": {
                                        "FetchQueue.html#pause": {
                                          "ref": "FetchQueue.html#pause",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "f": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "h": {
                                        "docs": {
                                          "FetchQueue.html#fetch": {
                                            "ref": "FetchQueue.html#fetch",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "t": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "k": {
                          "docs": {
                            "FetchQueue.html#_next": {
                              "ref": "FetchQueue.html#_next",
                              "tf": 50
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "FetchQueue.html#_next": {
                            "ref": "FetchQueue.html#_next",
                            "tf": 110
                          },
                          "FetchQueue.html#_fetchStep": {
                            "ref": "FetchQueue.html#_fetchStep",
                            "tf": 110
                          },
                          "FetchQueue.html#setRateLimit": {
                            "ref": "FetchQueue.html#setRateLimit",
                            "tf": 110
                          },
                          "FetchQueue.html#pause": {
                            "ref": "FetchQueue.html#pause",
                            "tf": 110
                          },
                          "FetchQueue.html#resume": {
                            "ref": "FetchQueue.html#resume",
                            "tf": 110
                          },
                          "FetchQueue.html#stop": {
                            "ref": "FetchQueue.html#stop",
                            "tf": 110
                          },
                          "FetchQueue.html#fetch": {
                            "ref": "FetchQueue.html#fetch",
                            "tf": 110
                          },
                          "Article.html#read": {
                            "ref": "Article.html#read",
                            "tf": 110
                          },
                          "Article.html#delete": {
                            "ref": "Article.html#delete",
                            "tf": 110
                          },
                          "Article.html#edit": {
                            "ref": "Article.html#edit",
                            "tf": 110
                          },
                          "Article.html#blockUser": {
                            "ref": "Article.html#blockUser",
                            "tf": 110
                          },
                          "Article.html#restrictCountry": {
                            "ref": "Article.html#restrictCountry",
                            "tf": 110
                          },
                          "Article.html#writeComment": {
                            "ref": "Article.html#writeComment",
                            "tf": 110
                          },
                          "Article.html#deleteComment": {
                            "ref": "Article.html#deleteComment",
                            "tf": 110
                          },
                          "Article.html#editComment": {
                            "ref": "Article.html#editComment",
                            "tf": 110
                          },
                          "Board.html#getArticle": {
                            "ref": "Board.html#getArticle",
                            "tf": 110
                          },
                          "Board.html#readArticle": {
                            "ref": "Board.html#readArticle",
                            "tf": 110
                          },
                          "Board.html#writeArticle": {
                            "ref": "Board.html#writeArticle",
                            "tf": 110
                          },
                          "Board.html#deleteArticle": {
                            "ref": "Board.html#deleteArticle",
                            "tf": 110
                          },
                          "Board.html#editArticle": {
                            "ref": "Board.html#editArticle",
                            "tf": 110
                          },
                          "Board.html#queryPage": {
                            "ref": "Board.html#queryPage",
                            "tf": 110
                          },
                          "Board.html#readPage": {
                            "ref": "Board.html#readPage",
                            "tf": 110
                          },
                          "LoginSession.html#_login": {
                            "ref": "LoginSession.html#_login",
                            "tf": 110
                          },
                          "LoginSession.html#_validateSession": {
                            "ref": "LoginSession.html#_validateSession",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "q": {
          "docs": {},
          "u": {
            "docs": {},
            "e": {
              "docs": {},
              "u": {
                "docs": {},
                "e": {
                  "docs": {
                    "FetchQueue.html": {
                      "ref": "FetchQueue.html",
                      "tf": 12.5
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "y": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "g": {
                        "docs": {
                          "Board.html#queryPage": {
                            "ref": "Board.html#queryPage",
                            "tf": 670
                          },
                          "Board.html#readPage": {
                            "ref": "Board.html#readPage",
                            "tf": 50
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "_": {
          "docs": {},
          "q": {
            "docs": {},
            "u": {
              "docs": {},
              "e": {
                "docs": {},
                "u": {
                  "docs": {},
                  "e": {
                    "docs": {
                      "FetchQueue.html#_queue": {
                        "ref": "FetchQueue.html#_queue",
                        "tf": 700
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "e": {
              "docs": {},
              "x": {
                "docs": {},
                "t": {
                  "docs": {
                    "FetchQueue.html#_next": {
                      "ref": "FetchQueue.html#_next",
                      "tf": 700
                    }
                  }
                }
              }
            }
          },
          "f": {
            "docs": {},
            "e": {
              "docs": {},
              "t": {
                "docs": {},
                "c": {
                  "docs": {},
                  "h": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "p": {
                            "docs": {
                              "FetchQueue.html#_fetchStep": {
                                "ref": "FetchQueue.html#_fetchStep",
                                "tf": 750
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "e": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Article.html#_session": {
                            "ref": "Article.html#_session",
                            "tf": 700
                          },
                          "Board.html#_session": {
                            "ref": "Board.html#_session",
                            "tf": 750
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "b": {
            "docs": {},
            "o": {
              "docs": {},
              "a": {
                "docs": {},
                "r": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Article.html#_board": {
                        "ref": "Article.html#_board",
                        "tf": 700
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "r": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "a": {
                                "docs": {
                                  "Article.html#_articleData": {
                                    "ref": "Article.html#_articleData",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "a": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "Board.html#_cacheSize": {
                          "ref": "Board.html#_cacheSize",
                          "tf": 750
                        }
                      }
                    },
                    "d": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "Board.html#_cachedArticles": {
                                      "ref": "Board.html#_cachedArticles",
                                      "tf": 750
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "d": {
                            "docs": {
                              "Board.html#_cachedOrder": {
                                "ref": "Board.html#_cachedOrder",
                                "tf": 750
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "g": {
                "docs": {},
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "LoginSession.html#_login": {
                        "ref": "LoginSession.html#_login",
                        "tf": 700
                      }
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "LoginSession.html#_validateSession": {
                                      "ref": "LoginSession.html#_validateSession",
                                      "tf": 700
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "FetchQueue.html#_queue": {
                        "ref": "FetchQueue.html#_queue",
                        "tf": 110
                      },
                      "FetchQueue.html#rateLimit": {
                        "ref": "FetchQueue.html#rateLimit",
                        "tf": 110
                      },
                      "Article.html#_session": {
                        "ref": "Article.html#_session",
                        "tf": 110
                      },
                      "Article.html#_board": {
                        "ref": "Article.html#_board",
                        "tf": 110
                      },
                      "Article.html#_articleData": {
                        "ref": "Article.html#_articleData",
                        "tf": 110
                      },
                      "Board.html#_cacheSize": {
                        "ref": "Board.html#_cacheSize",
                        "tf": 110
                      },
                      "Board.html#_session": {
                        "ref": "Board.html#_session",
                        "tf": 110
                      },
                      "Board.html#url": {
                        "ref": "Board.html#url",
                        "tf": 110
                      },
                      "Board.html#_cachedArticles": {
                        "ref": "Board.html#_cachedArticles",
                        "tf": 110
                      },
                      "Board.html#_cachedOrder": {
                        "ref": "Board.html#_cachedOrder",
                        "tf": 110
                      },
                      "Board.html#.defaultCacheSize": {
                        "ref": "Board.html#.defaultCacheSize",
                        "tf": 110
                      },
                      "Board.html#articleCacheSize": {
                        "ref": "Board.html#articleCacheSize",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
          "e": {
            "docs": {},
            "w": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "FetchQueue.html#setRateLimit": {
                            "ref": "FetchQueue.html#setRateLimit",
                            "tf": 50
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "a": {
                "docs": {},
                "c": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "Article.html#writeComment": {
                        "ref": "Article.html#writeComment",
                        "tf": 16.666666666666664
                      },
                      "Article.html#deleteComment": {
                        "ref": "Article.html#deleteComment",
                        "tf": 16.666666666666664
                      },
                      "Article.html#editComment": {
                        "ref": "Article.html#editComment",
                        "tf": 16.666666666666664
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Board.html#_cacheSize": {
                        "ref": "Board.html#_cacheSize",
                        "tf": 50
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "a": {
            "docs": {},
            "u": {
              "docs": {},
              "s": {
                "docs": {
                  "FetchQueue.html#pause": {
                    "ref": "FetchQueue.html#pause",
                    "tf": 750
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "e": {
                "docs": {
                  "Board.html#queryPage": {
                    "ref": "Board.html#queryPage",
                    "tf": 20
                  },
                  "Board.html#readPage": {
                    "ref": "Board.html#readPage",
                    "tf": 25
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      ".": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              ";": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "&": {
                                                  "docs": {},
                                                  "g": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "FetchQueue.html#fetch": {
                                                          "ref": "FetchQueue.html#fetch",
                                                          "tf": 25
                                                        },
                                                        "Article.html#delete": {
                                                          "ref": "Article.html#delete",
                                                          "tf": 33.33333333333333
                                                        },
                                                        "Article.html#edit": {
                                                          "ref": "Article.html#edit",
                                                          "tf": 25
                                                        },
                                                        "Article.html#blockUser": {
                                                          "ref": "Article.html#blockUser",
                                                          "tf": 25
                                                        },
                                                        "Article.html#restrictCountry": {
                                                          "ref": "Article.html#restrictCountry",
                                                          "tf": 25
                                                        },
                                                        "Article.html#deleteComment": {
                                                          "ref": "Article.html#deleteComment",
                                                          "tf": 33.33333333333333
                                                        },
                                                        "Article.html#editComment": {
                                                          "ref": "Article.html#editComment",
                                                          "tf": 25
                                                        },
                                                        "Board.html#deleteArticle": {
                                                          "ref": "Board.html#deleteArticle",
                                                          "tf": 33.33333333333333
                                                        },
                                                        "Board.html#editArticle": {
                                                          "ref": "Board.html#editArticle",
                                                          "tf": 20
                                                        },
                                                        "LoginSession.html#_login": {
                                                          "ref": "LoginSession.html#_login",
                                                          "tf": 50
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "a": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              ".": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "l": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "d": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {},
                                                                      "&": {
                                                                        "docs": {},
                                                                        "g": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {
                                                                              "Article.html#read": {
                                                                                "ref": "Article.html#read",
                                                                                "tf": 25
                                                                              },
                                                                              "Board.html#readArticle": {
                                                                                "ref": "Board.html#readArticle",
                                                                                "tf": 20
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "&": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "Board.html#writeArticle": {
                                                        "ref": "Board.html#writeArticle",
                                                        "tf": 25
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "r": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          ".": {
                                            "docs": {},
                                            "&": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  ";": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "&": {
                                                                    "docs": {},
                                                                    "g": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        ";": {
                                                                          "docs": {},
                                                                          "&": {
                                                                            "docs": {},
                                                                            "g": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {
                                                                                  "Board.html#queryPage": {
                                                                                    "ref": "Board.html#queryPage",
                                                                                    "tf": 20
                                                                                  },
                                                                                  "Board.html#readPage": {
                                                                                    "ref": "Board.html#readPage",
                                                                                    "tf": 25
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "c": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "&": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "Article.html#writeComment": {
                                                        "ref": "Article.html#writeComment",
                                                        "tf": 25
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "o": {
            "docs": {},
            "a": {
              "docs": {},
              "r": {
                "docs": {},
                "d": {
                  "docs": {
                    "Article.html#_board": {
                      "ref": "Article.html#_board",
                      "tf": 50
                    },
                    "Board.html": {
                      "ref": "Board.html",
                      "tf": 1916.6666666666667
                    },
                    "Board.html#.defaultCacheSize": {
                      "ref": "Board.html#.defaultCacheSize",
                      "tf": 50
                    },
                    "Board.html#articleCacheSize": {
                      "ref": "Board.html#articleCacheSize",
                      "tf": 50
                    }
                  },
                  "#": {
                    "docs": {},
                    "_": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "Board.html#_cacheSize": {
                                      "ref": "Board.html#_cacheSize",
                                      "tf": 1150
                                    }
                                  }
                                },
                                "d": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "l": {
                                              "docs": {
                                                "Board.html#_cachedArticles": {
                                                  "ref": "Board.html#_cachedArticles",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "o": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "d": {
                                        "docs": {
                                          "Board.html#_cachedOrder": {
                                            "ref": "Board.html#_cachedOrder",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "s": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "Board.html#_session": {
                                  "ref": "Board.html#_session",
                                  "tf": 1150
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "u": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "l": {
                          "docs": {
                            "Board.html#url": {
                              "ref": "Board.html#url",
                              "tf": 1150
                            }
                          }
                        }
                      }
                    },
                    "a": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "Board.html#articleCacheSize": {
                                                  "ref": "Board.html#articleCacheSize",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "g": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "l": {
                                      "docs": {
                                        "Board.html#getArticle": {
                                          "ref": "Board.html#getArticle",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "r": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "l": {
                                        "docs": {
                                          "Board.html#readArticle": {
                                            "ref": "Board.html#readArticle",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "p": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "g": {
                                  "docs": {
                                    "Board.html#readPage": {
                                      "ref": "Board.html#readPage",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "w": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "l": {
                                          "docs": {
                                            "Board.html#writeArticle": {
                                              "ref": "Board.html#writeArticle",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "d": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "l": {
                                            "docs": {
                                              "Board.html#deleteArticle": {
                                                "ref": "Board.html#deleteArticle",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "e": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "l": {
                                        "docs": {
                                          "Board.html#editArticle": {
                                            "ref": "Board.html#editArticle",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "q": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "g": {
                                    "docs": {
                                      "Board.html#queryPage": {
                                        "ref": "Board.html#queryPage",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  ".": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "f": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "Board.html#.defaultCacheSize": {
                                                  "ref": "Board.html#.defaultCacheSize",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "Article.html#blockUser": {
                          "ref": "Article.html#blockUser",
                          "tf": 675
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "p": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Article.html#read": {
                        "ref": "Article.html#read",
                        "tf": 25
                      },
                      "Board.html#readArticle": {
                        "ref": "Board.html#readArticle",
                        "tf": 20
                      },
                      "Board.html#queryPage": {
                        "ref": "Board.html#queryPage",
                        "tf": 20
                      },
                      "Board.html#readPage": {
                        "ref": "Board.html#readPage",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "w": {
          "docs": {},
          "r": {
            "docs": {},
            "i": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "Article.html#writeComment": {
                            "ref": "Article.html#writeComment",
                            "tf": 675
                          }
                        }
                      }
                    }
                  },
                  "a": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "l": {
                              "docs": {
                                "Board.html#writeArticle": {
                                  "ref": "Board.html#writeArticle",
                                  "tf": 675
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "r": {
            "docs": {},
            "l": {
              "docs": {
                "Board.html#url": {
                  "ref": "Board.html#url",
                  "tf": 750
                }
              }
            }
          }
        }
      },
      "length": 246
    },
    "corpusTokens": [
      "_articledata",
      "_board",
      "_cachedarticl",
      "_cachedord",
      "_caches",
      "_fetchstep",
      "_login",
      "_next",
      "_queue",
      "_session",
      "_validatesess",
      "api",
      "arca.l",
      "arcalive.j",
      "argument",
      "argumenterror",
      "array.&lt;fetchtask&gt",
      "articl",
      "article#_articledata",
      "article#_board",
      "article#_sess",
      "article#blockus",
      "article#delet",
      "article#deletecom",
      "article#edit",
      "article#editcom",
      "article#read",
      "article#restrictcountri",
      "article#writecom",
      "article.articledata",
      "articlecaches",
      "articledata",
      "articleid",
      "article~article.articledata",
      "blockus",
      "board",
      "board#_cachedarticl",
      "board#_cachedord",
      "board#_caches",
      "board#_sess",
      "board#articlecaches",
      "board#deletearticl",
      "board#editarticl",
      "board#getarticl",
      "board#querypag",
      "board#readarticl",
      "board#readpag",
      "board#url",
      "board#writearticl",
      "board.defaultcaches",
      "class",
      "comment",
      "commentdata",
      "commentid",
      "comment~comment.commentdata",
      "countri",
      "defaultcaches",
      "delet",
      "deletearticl",
      "deletecom",
      "document",
      "durat",
      "edit",
      "editarticl",
      "editcom",
      "error",
      "fetch",
      "fetchqueu",
      "fetchqueue#_fetchstep",
      "fetchqueue#_next",
      "fetchqueue#_queu",
      "fetchqueue#fetch",
      "fetchqueue#paus",
      "fetchqueue#ratelimit",
      "fetchqueue#resum",
      "fetchqueue#setratelimit",
      "fetchqueue#stop",
      "fetchtask",
      "function",
      "getarticl",
      "global",
      "index",
      "init",
      "limit",
      "list",
      "list:class",
      "loginsess",
      "loginsession#_login",
      "loginsession#_validatesess",
      "lt;async&gt",
      "lt;static&gt",
      "member",
      "newlimit",
      "nocach",
      "number",
      "option",
      "page",
      "paus",
      "promise.&lt;array.&lt;article&gt;&gt",
      "promise.&lt;article&gt",
      "promise.&lt;article.articledata&gt",
      "promise.&lt;comment&gt",
      "promise.&lt;response&gt",
      "querypag",
      "queue",
      "rate",
      "ratelimit",
      "read",
      "readarticl",
      "readm",
      "readpag",
      "reject",
      "requestsess",
      "resourc",
      "restrictcountri",
      "resum",
      "session",
      "sessionerror",
      "setratelimit",
      "small",
      "stop",
      "url",
      "writearticl",
      "writecom"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "arcalive.js",
      "longname": "index",
      "name": "arcalive.js",
      "tags": "index",
      "summary": "A small arca.live API",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "ArgumentError.html": {
      "id": "ArgumentError.html",
      "kind": "class",
      "title": "ArgumentError",
      "longname": "ArgumentError",
      "name": "ArgumentError",
      "tags": "ArgumentError",
      "summary": "",
      "description": "Argument Error",
      "body": ""
    },
    "SessionError.html": {
      "id": "SessionError.html",
      "kind": "class",
      "title": "SessionError",
      "longname": "SessionError",
      "name": "SessionError",
      "tags": "SessionError",
      "summary": "",
      "description": "Session Error",
      "body": ""
    },
    "FetchQueue.html": {
      "id": "FetchQueue.html",
      "kind": "class",
      "title": "FetchQueue",
      "longname": "FetchQueue",
      "name": "FetchQueue",
      "tags": "FetchQueue",
      "summary": "",
      "description": "Rate Limit을 준수하는 fetch queue",
      "body": ""
    },
    "FetchQueue.html#_queue": {
      "id": "FetchQueue.html#_queue",
      "kind": "member",
      "title": "_queue :Array.&lt;FetchTask&gt;",
      "longname": "FetchQueue#_queue",
      "name": "_queue",
      "tags": "FetchQueue#_queue _queue",
      "summary": "",
      "description": ""
    },
    "FetchQueue.html#rateLimit": {
      "id": "FetchQueue.html#rateLimit",
      "kind": "member",
      "title": "rateLimit",
      "longname": "FetchQueue#rateLimit",
      "name": "rateLimit",
      "tags": "FetchQueue#rateLimit rateLimit",
      "summary": "",
      "description": "Rate Limit을 재설정한다. 각 fetch는 여기에서 지정한 제한값만큼의 시간을 대기하고 보내진다."
    },
    "FetchQueue.html#_next": {
      "id": "FetchQueue.html#_next",
      "kind": "function",
      "title": "_next() → {FetchTask}",
      "longname": "FetchQueue#_next",
      "name": "_next",
      "tags": "FetchQueue#_next _next",
      "summary": "",
      "description": "다음 Fetch 작업을 얻어온다. 큐에 완료된 작업이 쌓여있을 경우 정리한다."
    },
    "FetchQueue.html#_fetchStep": {
      "id": "FetchQueue.html#_fetchStep",
      "kind": "function",
      "title": "_fetchStep()",
      "longname": "FetchQueue#_fetchStep",
      "name": "_fetchStep",
      "tags": "FetchQueue#_fetchStep _fetchStep",
      "summary": "",
      "description": "다음 Fetch 작업을 수행한다."
    },
    "FetchQueue.html#setRateLimit": {
      "id": "FetchQueue.html#setRateLimit",
      "kind": "function",
      "title": "setRateLimit( newLimit )",
      "longname": "FetchQueue#setRateLimit",
      "name": "setRateLimit",
      "tags": "FetchQueue#setRateLimit setRateLimit",
      "summary": "",
      "description": "Rate Limit을 재설정한다. 각 fetch는 여기에서 지정한 제한값만큼의 시간을 대기하고 보내진다."
    },
    "FetchQueue.html#pause": {
      "id": "FetchQueue.html#pause",
      "kind": "function",
      "title": "pause()",
      "longname": "FetchQueue#pause",
      "name": "pause",
      "tags": "FetchQueue#pause pause",
      "summary": "",
      "description": "Fetch를 일시정지한다."
    },
    "FetchQueue.html#resume": {
      "id": "FetchQueue.html#resume",
      "kind": "function",
      "title": "resume()",
      "longname": "FetchQueue#resume",
      "name": "resume",
      "tags": "FetchQueue#resume resume",
      "summary": "",
      "description": "Fetch가 정지되어 있었을 경우 다시 시작한다."
    },
    "FetchQueue.html#stop": {
      "id": "FetchQueue.html#stop",
      "kind": "function",
      "title": "stop()",
      "longname": "FetchQueue#stop",
      "name": "stop",
      "tags": "FetchQueue#stop stop",
      "summary": "",
      "description": "Fetch를 정지한다. 대기열의 모든 fetch는 전부 reject된다."
    },
    "FetchQueue.html#fetch": {
      "id": "FetchQueue.html#fetch",
      "kind": "function",
      "title": "fetch( resource, init ) → {Promise.&lt;Response&gt;}",
      "longname": "FetchQueue#fetch",
      "name": "fetch",
      "tags": "FetchQueue#fetch fetch",
      "summary": "",
      "description": "새 fetch를 큐에 넣는다."
    },
    "Article.html": {
      "id": "Article.html",
      "kind": "class",
      "title": "Article",
      "longname": "Article",
      "name": "Article",
      "tags": "Article",
      "summary": "",
      "description": "새 게시글 객체 Article을 만든다. 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).",
      "body": ""
    },
    "Article.html#_session": {
      "id": "Article.html#_session",
      "kind": "member",
      "title": "_session :RequestSession",
      "longname": "Article#_session",
      "name": "_session",
      "tags": "Article#_session _session",
      "summary": "",
      "description": ""
    },
    "Article.html#_board": {
      "id": "Article.html#_board",
      "kind": "member",
      "title": "_board :Board",
      "longname": "Article#_board",
      "name": "_board",
      "tags": "Article#_board _board",
      "summary": "",
      "description": ""
    },
    "Article.html#_articleData": {
      "id": "Article.html#_articleData",
      "kind": "member",
      "title": "_articleData :Article.ArticleData",
      "longname": "Article#_articleData",
      "name": "_articleData",
      "tags": "Article#_articleData _articleData",
      "summary": "",
      "description": ""
    },
    "Article.html#read": {
      "id": "Article.html#read",
      "kind": "function",
      "title": "&lt;async&gt; read( options ) → {Promise.&lt;Article.ArticleData&gt;}",
      "longname": "Article#read",
      "name": "read",
      "tags": "Article#read read",
      "summary": "",
      "description": "해당 게시글을 fetch한다. 만일 이미 읽어온 게시글일 경우, fetch 없이 정보를 그대로 반환한다."
    },
    "Article.html#delete": {
      "id": "Article.html#delete",
      "kind": "function",
      "title": "&lt;async&gt; delete() → {Promise.&lt;Response&gt;}",
      "longname": "Article#delete",
      "name": "delete",
      "tags": "Article#delete delete",
      "summary": "",
      "description": "해당 게시글을 삭제한다."
    },
    "Article.html#edit": {
      "id": "Article.html#edit",
      "kind": "function",
      "title": "&lt;async&gt; edit( article ) → {Promise.&lt;Response&gt;}",
      "longname": "Article#edit",
      "name": "edit",
      "tags": "Article#edit edit",
      "summary": "",
      "description": "해당 게시글을 수정한다."
    },
    "Article.html#blockUser": {
      "id": "Article.html#blockUser",
      "kind": "function",
      "title": "&lt;async&gt; blockUser( duration ) → {Promise.&lt;Response&gt;}",
      "longname": "Article#blockUser",
      "name": "blockUser",
      "tags": "Article#blockUser blockUser",
      "summary": "",
      "description": "해당 게시글의 작성자를 차단한다."
    },
    "Article.html#restrictCountry": {
      "id": "Article.html#restrictCountry",
      "kind": "function",
      "title": "&lt;async&gt; restrictCountry( ...countries ) → {Promise.&lt;Response&gt;}",
      "longname": "Article#restrictCountry",
      "name": "restrictCountry",
      "tags": "Article#restrictCountry restrictCountry",
      "summary": "",
      "description": "해당 게시글을 볼 수 없는 국가를 설정한다."
    },
    "Article.html#writeComment": {
      "id": "Article.html#writeComment",
      "kind": "function",
      "title": "&lt;async&gt; writeComment( comment ) → {Promise.&lt;Comment&gt;}",
      "longname": "Article#writeComment",
      "name": "writeComment",
      "tags": "Article#writeComment writeComment",
      "summary": "",
      "description": "해당 게시글에 새 댓글을 작성한다. 작성하더라도 articleData에는 추가되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다."
    },
    "Article.html#deleteComment": {
      "id": "Article.html#deleteComment",
      "kind": "function",
      "title": "deleteComment( commentId ) → {Promise.&lt;Response&gt;}",
      "longname": "Article#deleteComment",
      "name": "deleteComment",
      "tags": "Article#deleteComment deleteComment",
      "summary": "",
      "description": "해당 게시글에서 댓글을 삭제한다. 삭제하더라도 articleData에서는 삭제되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다."
    },
    "Article.html#editComment": {
      "id": "Article.html#editComment",
      "kind": "function",
      "title": "editComment( commentId, comment ) → {Promise.&lt;Response&gt;}",
      "longname": "Article#editComment",
      "name": "editComment",
      "tags": "Article#editComment editComment",
      "summary": "",
      "description": "해당 게시글에 작성된 댓글을 수정한다. 수정하더라도 articleData에는 수정되지 않으며, 변경 사항을 확인하려면 noCache로 다시 read해와야 한다."
    },
    "Board.html": {
      "id": "Board.html",
      "kind": "class",
      "title": "Board",
      "longname": "Board",
      "name": "Board",
      "tags": "Board",
      "summary": "",
      "description": "새 게시판 객체 Board를 만든다. 생성시에는 게시판의 존재 여부를 확인하지 않는다(Rate Limit때문).",
      "body": ""
    },
    "Board.html#_cacheSize": {
      "id": "Board.html#_cacheSize",
      "kind": "member",
      "title": "_cacheSize",
      "longname": "Board#_cacheSize",
      "name": "_cacheSize",
      "tags": "Board#_cacheSize _cacheSize",
      "summary": "",
      "description": ""
    },
    "Board.html#_session": {
      "id": "Board.html#_session",
      "kind": "member",
      "title": "_session",
      "longname": "Board#_session",
      "name": "_session",
      "tags": "Board#_session _session",
      "summary": "",
      "description": ""
    },
    "Board.html#url": {
      "id": "Board.html#url",
      "kind": "member",
      "title": "url",
      "longname": "Board#url",
      "name": "url",
      "tags": "Board#url url",
      "summary": "",
      "description": ""
    },
    "Board.html#_cachedArticles": {
      "id": "Board.html#_cachedArticles",
      "kind": "member",
      "title": "_cachedArticles",
      "longname": "Board#_cachedArticles",
      "name": "_cachedArticles",
      "tags": "Board#_cachedArticles _cachedArticles",
      "summary": "",
      "description": ""
    },
    "Board.html#_cachedOrder": {
      "id": "Board.html#_cachedOrder",
      "kind": "member",
      "title": "_cachedOrder",
      "longname": "Board#_cachedOrder",
      "name": "_cachedOrder",
      "tags": "Board#_cachedOrder _cachedOrder",
      "summary": "",
      "description": ""
    },
    "Board.html#.defaultCacheSize": {
      "id": "Board.html#.defaultCacheSize",
      "kind": "member",
      "title": "&lt;static&gt; defaultCacheSize",
      "longname": "Board.defaultCacheSize",
      "name": "defaultCacheSize",
      "tags": "Board.defaultCacheSize defaultCacheSize",
      "summary": "",
      "description": "Board의 기본 캐시 사이즈를 설정한다. 이미 생성된 객체에는 효과가 없다."
    },
    "Board.html#articleCacheSize": {
      "id": "Board.html#articleCacheSize",
      "kind": "member",
      "title": "articleCacheSize",
      "longname": "Board#articleCacheSize",
      "name": "articleCacheSize",
      "tags": "Board#articleCacheSize articleCacheSize",
      "summary": "",
      "description": "Board 객체의 캐시 사이즈를 설정한다."
    },
    "Board.html#getArticle": {
      "id": "Board.html#getArticle",
      "kind": "function",
      "title": "getArticle( articleId ) → {Article}",
      "longname": "Board#getArticle",
      "name": "getArticle",
      "tags": "Board#getArticle getArticle",
      "summary": "",
      "description": "해당 번호의 Article 객체를 얻어온다. 만일 캐시된 Article 객체가 지나치게 많을 경우 캐시를 정리한다."
    },
    "Board.html#readArticle": {
      "id": "Board.html#readArticle",
      "kind": "function",
      "title": "&lt;async&gt; readArticle( articleId, options ) → {Promise.&lt;Article.ArticleData&gt;}",
      "longname": "Board#readArticle",
      "name": "readArticle",
      "tags": "Board#readArticle readArticle",
      "summary": "",
      "description": "해당 게시판에 있는 게시글의 객체 Article을 읽는다. 존재하지 않을 경우 실패한다."
    },
    "Board.html#writeArticle": {
      "id": "Board.html#writeArticle",
      "kind": "function",
      "title": "&lt;async&gt; writeArticle( article ) → {Promise.&lt;Article&gt;}",
      "longname": "Board#writeArticle",
      "name": "writeArticle",
      "tags": "Board#writeArticle writeArticle",
      "summary": "",
      "description": "해당 게시판에 새 글을 작성한다."
    },
    "Board.html#deleteArticle": {
      "id": "Board.html#deleteArticle",
      "kind": "function",
      "title": "deleteArticle( articleId ) → {Promise.&lt;Response&gt;}",
      "longname": "Board#deleteArticle",
      "name": "deleteArticle",
      "tags": "Board#deleteArticle deleteArticle",
      "summary": "",
      "description": "해당 게시판에서 글을 삭제한다."
    },
    "Board.html#editArticle": {
      "id": "Board.html#editArticle",
      "kind": "function",
      "title": "&lt;async&gt; editArticle( articleId, article ) → {Promise.&lt;Response&gt;}",
      "longname": "Board#editArticle",
      "name": "editArticle",
      "tags": "Board#editArticle editArticle",
      "summary": "",
      "description": "해당 게시판에서 글을 수정한다."
    },
    "Board.html#queryPage": {
      "id": "Board.html#queryPage",
      "kind": "function",
      "title": "&lt;async&gt; queryPage( page, options ) → {Promise.&lt;Array.&lt;Article&gt;&gt;}",
      "longname": "Board#queryPage",
      "name": "queryPage",
      "tags": "Board#queryPage queryPage",
      "summary": "",
      "description": "해당 게시판에서 글을 검색한다."
    },
    "Board.html#readPage": {
      "id": "Board.html#readPage",
      "kind": "function",
      "title": "readPage( page, options ) → {Promise.&lt;Array.&lt;Article&gt;&gt;}",
      "longname": "Board#readPage",
      "name": "readPage",
      "tags": "Board#readPage readPage",
      "summary": "",
      "description": "해당 게시판의 페이지를 얻어온다. 내부적으로 queryPage를 호출한다."
    },
    "Comment-Comment.CommentData.html": {
      "id": "Comment-Comment.CommentData.html",
      "kind": "class",
      "title": "CommentData",
      "longname": "Comment~Comment.CommentData",
      "name": "CommentData",
      "tags": "Comment~Comment.CommentData CommentData",
      "summary": "",
      "description": "새 댓글 정보 객체 ArticleData를 만든다.",
      "body": ""
    },
    "LoginSession.html": {
      "id": "LoginSession.html",
      "kind": "class",
      "title": "LoginSession",
      "longname": "LoginSession",
      "name": "LoginSession",
      "tags": "LoginSession",
      "summary": "",
      "description": "로그인된 세션 LoginSession을 만든다.",
      "body": ""
    },
    "LoginSession.html#_login": {
      "id": "LoginSession.html#_login",
      "kind": "function",
      "title": "_login() → {Promise.&lt;Response&gt;}",
      "longname": "LoginSession#_login",
      "name": "_login",
      "tags": "LoginSession#_login _login",
      "summary": "",
      "description": "해당 세션의 로그인 정보로 로그인을 시도한다."
    },
    "LoginSession.html#_validateSession": {
      "id": "LoginSession.html#_validateSession",
      "kind": "function",
      "title": "&lt;async&gt; _validateSession()",
      "longname": "LoginSession#_validateSession",
      "name": "_validateSession",
      "tags": "LoginSession#_validateSession _validateSession",
      "summary": "",
      "description": "해당 세션의 로그인 상태를 확인한다. 로그아웃되었을 경우 다시 로그인한다."
    },
    "Article-Article.ArticleData.html": {
      "id": "Article-Article.ArticleData.html",
      "kind": "class",
      "title": "ArticleData",
      "longname": "Article~Article.ArticleData",
      "name": "ArticleData",
      "tags": "Article~Article.ArticleData ArticleData",
      "summary": "",
      "description": "새 게시글 정보 객체 ArticleData를 만든다.",
      "body": ""
    }
  }
};