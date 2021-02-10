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
          "base",
          "bootstrap",
          "foodoc",
          "handlebar",
          "index",
          "jsdoc3",
          "readm",
          "templat"
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
        "FetchQueue.html": [
          "class",
          "fetch",
          "fetchqueu"
        ],
        "FetchQueue.html#._next": [
          "_next",
          "fetch",
          "fetchqueue._next",
          "function",
          "lt;static&gt",
          "object"
        ],
        "FetchQueue.html#._fetchStep": [
          "_fetchstep",
          "fetch",
          "fetchqueue._fetchstep",
          "function",
          "lt;static&gt"
        ],
        "FetchQueue.html#.setRateLimit": [
          "fetch",
          "fetchqueue.setratelimit",
          "function",
          "limit",
          "lt;static&gt",
          "newlimit",
          "rate",
          "setratelimit"
        ],
        "FetchQueue.html#.pause": [
          "fetch",
          "fetchqueue.paus",
          "function",
          "lt;static&gt",
          "paus"
        ],
        "FetchQueue.html#.resume": [
          "fetch",
          "fetchqueue.resum",
          "function",
          "lt;static&gt",
          "resum"
        ],
        "FetchQueue.html#.stop": [
          "fetch",
          "fetchqueue.stop",
          "function",
          "lt;static&gt",
          "reject",
          "stop"
        ],
        "FetchQueue.html#.fetch": [
          "fetch",
          "fetchqueue.fetch",
          "function",
          "init",
          "lt;static&gt",
          "promise.&lt;response&gt",
          "resourc"
        ],
        "Board.html": [
          "board",
          "class",
          "limit",
          "rate"
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
          "option",
          "promise.&lt;article.articledata&gt",
          "readarticl"
        ],
        "Board.html#writeArticle": [
          "articl",
          "board#writearticl",
          "function",
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
          "promise.&lt;response&gt"
        ],
        "Board.html#queryPage": [
          "board#querypag",
          "function",
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
        "Article.html": [
          "articl",
          "class",
          "limit",
          "rate"
        ],
        "Article.html#read": [
          "article#read",
          "fetch",
          "function",
          "option",
          "promise.&lt;article.articledata&gt",
          "read"
        ],
        "Article.html#delete": [
          "article#delet",
          "delet",
          "function",
          "promise.&lt;response&gt"
        ],
        "Article.html#edit": [
          "articl",
          "article#edit",
          "edit",
          "function",
          "promise.&lt;response&gt"
        ],
        "Article.html#blockUser": [
          "article#blockus",
          "blockus",
          "durat",
          "function",
          "promise.&lt;response&gt"
        ],
        "Article.html#restrictCountry": [
          "article#restrictcountri",
          "countri",
          "function",
          "promise.&lt;response&gt",
          "restrictcountri"
        ],
        "Article.html#writeComment": [
          "article#writecom",
          "articledata",
          "comment",
          "function",
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
        "Comment.html": [
          "class",
          "comment",
          "limit",
          "rate"
        ],
        "Comment.html#read": [
          "comment#read",
          "comment.commentdata",
          "function",
          "read"
        ],
        "Comment.html#delete": [
          "comment#delet",
          "delet",
          "function",
          "promise.&lt;response&gt"
        ],
        "Comment.html#edit": [
          "comment",
          "comment#edit",
          "commentdata",
          "commentid",
          "edit",
          "function",
          "promise.&lt;response&gt"
        ],
        "RequestSession.html": [
          "class",
          "requestsess"
        ],
        "RequestSession.html#.anonymousSession": [
          "anonymoussess",
          "function",
          "lt;static&gt",
          "requestsess",
          "requestsession.anonymoussess"
        ],
        "RequestSession.html#setAnonymous": [
          "function",
          "requestsess",
          "requestsession#setanonym",
          "setanonym"
        ],
        "RequestSession.html#_loadCookies": [
          "_loadcooki",
          "function",
          "re",
          "requestsession#_loadcooki",
          "respons"
        ],
        "RequestSession.html#_makeCookieString": [
          "_makecookiestr",
          "function",
          "requestsession#_makecookiestr",
          "string"
        ],
        "RequestSession.html#_getCSRFToken": [
          "_getcsrftoken",
          "csrf",
          "function",
          "requestsession#_getcsrftoken",
          "string|object",
          "tokennam",
          "url"
        ],
        "RequestSession.html#_checkSession": [
          "_checksess",
          "function",
          "requestsession#_checksess"
        ],
        "RequestSession.html#_login": [
          "_login",
          "function",
          "requestsession#_login"
        ],
        "RequestSession.html#_fetch": [
          "_fetch",
          "fetch",
          "function",
          "init",
          "promise.&lt;(response|node)&gt",
          "requestsession#_fetch",
          "resourc"
        ],
        "RequestSession.html#getBoard": [
          "boardnam",
          "function",
          "getboard",
          "promise.&lt;board&gt",
          "requestsession#getboard"
        ],
        "RequestSession.html#fromUrl": [
          "boardnam",
          "board|articl",
          "fromurl",
          "function",
          "requestsession#fromurl",
          "url"
        ],
        "RequestSession.html#closeSession": [
          "closesess",
          "function",
          "requestsession#closesess"
        ],
        "Comment.CommentData.html": [
          "articledata",
          "class",
          "comment.commentdata",
          "commentdata"
        ],
        "Comment.CommentData.html#_freezeThis": [
          "_freezethi",
          "comment",
          "comment.commentdata",
          "comment.commentdata#_freezethi",
          "commentdata",
          "commentdata#_freezethi",
          "function"
        ],
        "Article.ArticleData.html": [
          "article.articledata",
          "articledata",
          "class"
        ],
        "Article.ArticleData.html#_freezeThis": [
          "_freezethi",
          "article.articledata",
          "article.articledata#_freezethi",
          "article.read",
          "articledata",
          "articledata#_freezethi",
          "function"
        ]
      },
      "length": 48
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "b": {
          "docs": {},
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "index.html": {
                    "ref": "index.html",
                    "tf": 14
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "t": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "p": {
                          "docs": {
                            "index.html": {
                              "ref": "index.html",
                              "tf": 14
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
                "d": {
                  "docs": {
                    "Board.html": {
                      "ref": "Board.html",
                      "tf": 1916.6666666666667
                    }
                  },
                  "#": {
                    "docs": {},
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
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "RequestSession.html#getBoard": {
                            "ref": "RequestSession.html#getBoard",
                            "tf": 33.33333333333333
                          },
                          "RequestSession.html#fromUrl": {
                            "ref": "RequestSession.html#fromUrl",
                            "tf": 33.33333333333333
                          }
                        }
                      }
                    }
                  },
                  "|": {
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
                                  "RequestSession.html#fromUrl": {
                                    "ref": "RequestSession.html#fromUrl",
                                    "tf": 33.33333333333333
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
                          "tf": 683.3333333333334
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
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "d": {
                "docs": {},
                "o": {
                  "docs": {},
                  "c": {
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
          },
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
                      "tf": 50
                    },
                    "FetchQueue.html#._next": {
                      "ref": "FetchQueue.html#._next",
                      "tf": 50
                    },
                    "FetchQueue.html#._fetchStep": {
                      "ref": "FetchQueue.html#._fetchStep",
                      "tf": 50
                    },
                    "FetchQueue.html#.setRateLimit": {
                      "ref": "FetchQueue.html#.setRateLimit",
                      "tf": 16.666666666666664
                    },
                    "FetchQueue.html#.pause": {
                      "ref": "FetchQueue.html#.pause",
                      "tf": 50
                    },
                    "FetchQueue.html#.resume": {
                      "ref": "FetchQueue.html#.resume",
                      "tf": 50
                    },
                    "FetchQueue.html#.stop": {
                      "ref": "FetchQueue.html#.stop",
                      "tf": 33.33333333333333
                    },
                    "FetchQueue.html#.fetch": {
                      "ref": "FetchQueue.html#.fetch",
                      "tf": 720
                    },
                    "Article.html#read": {
                      "ref": "Article.html#read",
                      "tf": 50
                    },
                    "RequestSession.html#_fetch": {
                      "ref": "RequestSession.html#_fetch",
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
                            ".": {
                              "docs": {},
                              "_": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "x": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "FetchQueue.html#._next": {
                                            "ref": "FetchQueue.html#._next",
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
                                                    "FetchQueue.html#._fetchStep": {
                                                      "ref": "FetchQueue.html#._fetchStep",
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
                                                        "FetchQueue.html#.setRateLimit": {
                                                          "ref": "FetchQueue.html#.setRateLimit",
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
                                        "FetchQueue.html#.stop": {
                                          "ref": "FetchQueue.html#.stop",
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
                                        "FetchQueue.html#.pause": {
                                          "ref": "FetchQueue.html#.pause",
                                          "tf": 1150
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
                                  "s": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "m": {
                                        "docs": {
                                          "FetchQueue.html#.resume": {
                                            "ref": "FetchQueue.html#.resume",
                                            "tf": 1150
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
                                          "FetchQueue.html#.fetch": {
                                            "ref": "FetchQueue.html#.fetch",
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
                          "FetchQueue.html#._next": {
                            "ref": "FetchQueue.html#._next",
                            "tf": 110
                          },
                          "FetchQueue.html#._fetchStep": {
                            "ref": "FetchQueue.html#._fetchStep",
                            "tf": 110
                          },
                          "FetchQueue.html#.setRateLimit": {
                            "ref": "FetchQueue.html#.setRateLimit",
                            "tf": 110
                          },
                          "FetchQueue.html#.pause": {
                            "ref": "FetchQueue.html#.pause",
                            "tf": 110
                          },
                          "FetchQueue.html#.resume": {
                            "ref": "FetchQueue.html#.resume",
                            "tf": 110
                          },
                          "FetchQueue.html#.stop": {
                            "ref": "FetchQueue.html#.stop",
                            "tf": 110
                          },
                          "FetchQueue.html#.fetch": {
                            "ref": "FetchQueue.html#.fetch",
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
                          "Comment.html#read": {
                            "ref": "Comment.html#read",
                            "tf": 110
                          },
                          "Comment.html#delete": {
                            "ref": "Comment.html#delete",
                            "tf": 110
                          },
                          "Comment.html#edit": {
                            "ref": "Comment.html#edit",
                            "tf": 110
                          },
                          "RequestSession.html#.anonymousSession": {
                            "ref": "RequestSession.html#.anonymousSession",
                            "tf": 110
                          },
                          "RequestSession.html#setAnonymous": {
                            "ref": "RequestSession.html#setAnonymous",
                            "tf": 110
                          },
                          "RequestSession.html#_loadCookies": {
                            "ref": "RequestSession.html#_loadCookies",
                            "tf": 110
                          },
                          "RequestSession.html#_makeCookieString": {
                            "ref": "RequestSession.html#_makeCookieString",
                            "tf": 110
                          },
                          "RequestSession.html#_getCSRFToken": {
                            "ref": "RequestSession.html#_getCSRFToken",
                            "tf": 110
                          },
                          "RequestSession.html#_checkSession": {
                            "ref": "RequestSession.html#_checkSession",
                            "tf": 110
                          },
                          "RequestSession.html#_login": {
                            "ref": "RequestSession.html#_login",
                            "tf": 110
                          },
                          "RequestSession.html#_fetch": {
                            "ref": "RequestSession.html#_fetch",
                            "tf": 110
                          },
                          "RequestSession.html#getBoard": {
                            "ref": "RequestSession.html#getBoard",
                            "tf": 110
                          },
                          "RequestSession.html#fromUrl": {
                            "ref": "RequestSession.html#fromUrl",
                            "tf": 110
                          },
                          "RequestSession.html#closeSession": {
                            "ref": "RequestSession.html#closeSession",
                            "tf": 110
                          },
                          "Comment.CommentData.html#_freezeThis": {
                            "ref": "Comment.CommentData.html#_freezeThis",
                            "tf": 110
                          },
                          "Article.ArticleData.html#_freezeThis": {
                            "ref": "Article.ArticleData.html#_freezeThis",
                            "tf": 110
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
            "o": {
              "docs": {},
              "m": {
                "docs": {},
                "u": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "RequestSession.html#fromUrl": {
                          "ref": "RequestSession.html#fromUrl",
                          "tf": 683.3333333333334
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "b": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "index.html": {
                              "ref": "index.html",
                              "tf": 14
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
                  "FetchQueue.html#.fetch": {
                    "ref": "FetchQueue.html#.fetch",
                    "tf": 20
                  },
                  "RequestSession.html#_fetch": {
                    "ref": "RequestSession.html#_fetch",
                    "tf": 25
                  }
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {},
            "d": {
              "docs": {},
              "o": {
                "docs": {},
                "c": {
                  "3": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 14
                      }
                    }
                  },
                  "docs": {}
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {
              "RequestSession.html#_loadCookies": {
                "ref": "RequestSession.html#_loadCookies",
                "tf": 33.33333333333333
              }
            },
            "a": {
              "docs": {},
              "d": {
                "docs": {
                  "Article.html#read": {
                    "ref": "Article.html#read",
                    "tf": 683.3333333333334
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
                  },
                  "Comment.html#read": {
                    "ref": "Comment.html#read",
                    "tf": 700
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
                                "tf": 675
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
                    "FetchQueue.html#.resume": {
                      "ref": "FetchQueue.html#.resume",
                      "tf": 700
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
                        "FetchQueue.html#.fetch": {
                          "ref": "FetchQueue.html#.fetch",
                          "tf": 20
                        },
                        "RequestSession.html#_fetch": {
                          "ref": "RequestSession.html#_fetch",
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
                  }
                }
              },
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "RequestSession.html#_loadCookies": {
                          "ref": "RequestSession.html#_loadCookies",
                          "tf": 33.33333333333333
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
                      "FetchQueue.html#.stop": {
                        "ref": "FetchQueue.html#.stop",
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
                                "RequestSession.html": {
                                  "ref": "RequestSession.html",
                                  "tf": 1950
                                },
                                "RequestSession.html#.anonymousSession": {
                                  "ref": "RequestSession.html#.anonymousSession",
                                  "tf": 33.33333333333333
                                },
                                "RequestSession.html#setAnonymous": {
                                  "ref": "RequestSession.html#setAnonymous",
                                  "tf": 50
                                }
                              },
                              "i": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    ".": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "y": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {
                                                                  "RequestSession.html#.anonymousSession": {
                                                                    "ref": "RequestSession.html#.anonymousSession",
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
                                    },
                                    "#": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "y": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {
                                                          "RequestSession.html#setAnonymous": {
                                                            "ref": "RequestSession.html#setAnonymous",
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
                                      "_": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "k": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {
                                                            "RequestSession.html#_loadCookies": {
                                                              "ref": "RequestSession.html#_loadCookies",
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
                                            "g": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {
                                                    "RequestSession.html#_login": {
                                                      "ref": "RequestSession.html#_login",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "m": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "k": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "k": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {
                                                                    "RequestSession.html#_makeCookieString": {
                                                                      "ref": "RequestSession.html#_makeCookieString",
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
                                              "c": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "k": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "n": {
                                                                "docs": {
                                                                  "RequestSession.html#_getCSRFToken": {
                                                                    "ref": "RequestSession.html#_getCSRFToken",
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
                                        "c": {
                                          "docs": {},
                                          "h": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "k": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {
                                                            "RequestSession.html#_checkSession": {
                                                              "ref": "RequestSession.html#_checkSession",
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
                                                    "RequestSession.html#_fetch": {
                                                      "ref": "RequestSession.html#_fetch",
                                                      "tf": 1150
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
                                                        "RequestSession.html#getBoard": {
                                                          "ref": "RequestSession.html#getBoard",
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
                                      "f": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {
                                                      "RequestSession.html#fromUrl": {
                                                        "ref": "RequestSession.html#fromUrl",
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
                                      "c": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "s": {
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
                                                          "RequestSession.html#closeSession": {
                                                            "ref": "RequestSession.html#closeSession",
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
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "e": {
                "docs": {
                  "FetchQueue.html#.setRateLimit": {
                    "ref": "FetchQueue.html#.setRateLimit",
                    "tf": 16.666666666666664
                  },
                  "Board.html": {
                    "ref": "Board.html",
                    "tf": 16.666666666666664
                  },
                  "Article.html": {
                    "ref": "Article.html",
                    "tf": 16.666666666666664
                  },
                  "Comment.html": {
                    "ref": "Comment.html",
                    "tf": 16.666666666666664
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "e": {
            "docs": {},
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 14
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
            "k": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {
                          "RequestSession.html#_getCSRFToken": {
                            "ref": "RequestSession.html#_getCSRFToken",
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
                      "tf": 700
                    },
                    "Comment.html#delete": {
                      "ref": "Comment.html#delete",
                      "tf": 700
                    }
                  },
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
                                    "tf": 683.3333333333334
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
                          "docs": {
                            "Article.html#deleteComment": {
                              "ref": "Article.html#deleteComment",
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
                      "tf": 33.33333333333333
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
                          "RequestSession.html#getBoard": {
                            "ref": "RequestSession.html#getBoard",
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
                    "FetchQueue.html": {
                      "ref": "FetchQueue.html",
                      "tf": 110
                    },
                    "Board.html": {
                      "ref": "Board.html",
                      "tf": 110
                    },
                    "Article.html": {
                      "ref": "Article.html",
                      "tf": 110
                    },
                    "Comment.html": {
                      "ref": "Comment.html",
                      "tf": 110
                    },
                    "RequestSession.html": {
                      "ref": "RequestSession.html",
                      "tf": 110
                    },
                    "Comment.CommentData.html": {
                      "ref": "Comment.CommentData.html",
                      "tf": 110
                    },
                    "Article.ArticleData.html": {
                      "ref": "Article.ArticleData.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "s": {
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
                            "RequestSession.html#closeSession": {
                              "ref": "RequestSession.html#closeSession",
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
                          "tf": 33.33333333333333
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
                          "tf": 33.33333333333333
                        },
                        "Article.html#editComment": {
                          "ref": "Article.html#editComment",
                          "tf": 25
                        },
                        "Comment.html": {
                          "ref": "Comment.html",
                          "tf": 1916.6666666666667
                        },
                        "Comment.html#edit": {
                          "ref": "Comment.html#edit",
                          "tf": 25
                        },
                        "Comment.CommentData.html#_freezeThis": {
                          "ref": "Comment.CommentData.html#_freezeThis",
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
                            },
                            "Comment.html#edit": {
                              "ref": "Comment.html#edit",
                              "tf": 25
                            }
                          }
                        }
                      },
                      "#": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "Comment.html#read": {
                                    "ref": "Comment.html#read",
                                    "tf": 1150
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
                                    "Comment.html#delete": {
                                      "ref": "Comment.html#delete",
                                      "tf": 1150
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
                                  "Comment.html#edit": {
                                    "ref": "Comment.html#edit",
                                    "tf": 1150
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
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
                                                "Comment.html#read": {
                                                  "ref": "Comment.html#read",
                                                  "tf": 50
                                                },
                                                "Comment.CommentData.html": {
                                                  "ref": "Comment.CommentData.html",
                                                  "tf": 1250
                                                },
                                                "Comment.CommentData.html#_freezeThis": {
                                                  "ref": "Comment.CommentData.html#_freezeThis",
                                                  "tf": 50
                                                }
                                              },
                                              "#": {
                                                "docs": {},
                                                "_": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "z": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {},
                                                                "h": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {
                                                                      "Comment.CommentData.html#_freezeThis": {
                                                                        "ref": "Comment.CommentData.html#_freezeThis",
                                                                        "tf": 1100
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
                      "d": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "a": {
                              "docs": {
                                "Comment.html#edit": {
                                  "ref": "Comment.html#edit",
                                  "tf": 50
                                },
                                "Comment.CommentData.html": {
                                  "ref": "Comment.CommentData.html",
                                  "tf": 650
                                },
                                "Comment.CommentData.html#_freezeThis": {
                                  "ref": "Comment.CommentData.html#_freezeThis",
                                  "tf": 25
                                }
                              },
                              "#": {
                                "docs": {},
                                "_": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "z": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {
                                                      "Comment.CommentData.html#_freezeThis": {
                                                        "ref": "Comment.CommentData.html#_freezeThis",
                                                        "tf": 100
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
          "s": {
            "docs": {},
            "r": {
              "docs": {},
              "f": {
                "docs": {
                  "RequestSession.html#_getCSRFToken": {
                    "ref": "RequestSession.html#_getCSRFToken",
                    "tf": 50
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
                    "FetchQueue.html#.setRateLimit": {
                      "ref": "FetchQueue.html#.setRateLimit",
                      "tf": 16.666666666666664
                    },
                    "Board.html": {
                      "ref": "Board.html",
                      "tf": 16.666666666666664
                    },
                    "Article.html": {
                      "ref": "Article.html",
                      "tf": 16.666666666666664
                    },
                    "Comment.html": {
                      "ref": "Comment.html",
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
                                  "FetchQueue.html#._next": {
                                    "ref": "FetchQueue.html#._next",
                                    "tf": 33.33333333333333
                                  },
                                  "FetchQueue.html#._fetchStep": {
                                    "ref": "FetchQueue.html#._fetchStep",
                                    "tf": 50
                                  },
                                  "FetchQueue.html#.setRateLimit": {
                                    "ref": "FetchQueue.html#.setRateLimit",
                                    "tf": 33.33333333333333
                                  },
                                  "FetchQueue.html#.pause": {
                                    "ref": "FetchQueue.html#.pause",
                                    "tf": 50
                                  },
                                  "FetchQueue.html#.resume": {
                                    "ref": "FetchQueue.html#.resume",
                                    "tf": 50
                                  },
                                  "FetchQueue.html#.stop": {
                                    "ref": "FetchQueue.html#.stop",
                                    "tf": 50
                                  },
                                  "FetchQueue.html#.fetch": {
                                    "ref": "FetchQueue.html#.fetch",
                                    "tf": 20
                                  },
                                  "RequestSession.html#.anonymousSession": {
                                    "ref": "RequestSession.html#.anonymousSession",
                                    "tf": 33.33333333333333
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
        "_": {
          "docs": {},
          "n": {
            "docs": {},
            "e": {
              "docs": {},
              "x": {
                "docs": {},
                "t": {
                  "docs": {
                    "FetchQueue.html#._next": {
                      "ref": "FetchQueue.html#._next",
                      "tf": 683.3333333333334
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
                      "RequestSession.html#_fetch": {
                        "ref": "RequestSession.html#_fetch",
                        "tf": 675
                      }
                    },
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "p": {
                            "docs": {
                              "FetchQueue.html#._fetchStep": {
                                "ref": "FetchQueue.html#._fetchStep",
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
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "e": {
                  "docs": {},
                  "z": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "h": {
                          "docs": {},
                          "i": {
                            "docs": {
                              "Comment.CommentData.html#_freezeThis": {
                                "ref": "Comment.CommentData.html#_freezeThis",
                                "tf": 650
                              },
                              "Article.ArticleData.html#_freezeThis": {
                                "ref": "Article.ArticleData.html#_freezeThis",
                                "tf": 650
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
              "a": {
                "docs": {},
                "d": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "k": {
                          "docs": {},
                          "i": {
                            "docs": {
                              "RequestSession.html#_loadCookies": {
                                "ref": "RequestSession.html#_loadCookies",
                                "tf": 683.3333333333334
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
                "i": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "RequestSession.html#_login": {
                        "ref": "RequestSession.html#_login",
                        "tf": 750
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "a": {
              "docs": {},
              "k": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "k": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "r": {
                                    "docs": {
                                      "RequestSession.html#_makeCookieString": {
                                        "ref": "RequestSession.html#_makeCookieString",
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
          "g": {
            "docs": {},
            "e": {
              "docs": {},
              "t": {
                "docs": {},
                "c": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "f": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "k": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "n": {
                                  "docs": {
                                    "RequestSession.html#_getCSRFToken": {
                                      "ref": "RequestSession.html#_getCSRFToken",
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
          },
          "c": {
            "docs": {},
            "h": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "k": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "RequestSession.html#_checkSession": {
                                "ref": "RequestSession.html#_checkSession",
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
          }
        },
        "o": {
          "docs": {},
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "FetchQueue.html#._next": {
                        "ref": "FetchQueue.html#._next",
                        "tf": 33.33333333333333
                      }
                    }
                  }
                }
              }
            }
          },
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
                      "Board.html#readArticle": {
                        "ref": "Board.html#readArticle",
                        "tf": 25
                      },
                      "Board.html#queryPage": {
                        "ref": "Board.html#queryPage",
                        "tf": 25
                      },
                      "Board.html#readPage": {
                        "ref": "Board.html#readPage",
                        "tf": 25
                      },
                      "Article.html#read": {
                        "ref": "Article.html#read",
                        "tf": 33.33333333333333
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
                          "FetchQueue.html#.setRateLimit": {
                            "ref": "FetchQueue.html#.setRateLimit",
                            "tf": 33.33333333333333
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
                                  "FetchQueue.html#.setRateLimit": {
                                    "ref": "FetchQueue.html#.setRateLimit",
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
              "a": {
                "docs": {},
                "n": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "RequestSession.html#setAnonymous": {
                              "ref": "RequestSession.html#setAnonymous",
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
          },
          "t": {
            "docs": {},
            "o": {
              "docs": {},
              "p": {
                "docs": {
                  "FetchQueue.html#.stop": {
                    "ref": "FetchQueue.html#.stop",
                    "tf": 700
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "RequestSession.html#_makeCookieString": {
                        "ref": "RequestSession.html#_makeCookieString",
                        "tf": 50
                      }
                    },
                    "|": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "j": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "t": {
                                  "docs": {
                                    "RequestSession.html#_getCSRFToken": {
                                      "ref": "RequestSession.html#_getCSRFToken",
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
        },
        "p": {
          "docs": {},
          "a": {
            "docs": {},
            "u": {
              "docs": {},
              "s": {
                "docs": {
                  "FetchQueue.html#.pause": {
                    "ref": "FetchQueue.html#.pause",
                    "tf": 700
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
                    "tf": 25
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
                                                        "FetchQueue.html#.fetch": {
                                                          "ref": "FetchQueue.html#.fetch",
                                                          "tf": 20
                                                        },
                                                        "Board.html#deleteArticle": {
                                                          "ref": "Board.html#deleteArticle",
                                                          "tf": 33.33333333333333
                                                        },
                                                        "Board.html#editArticle": {
                                                          "ref": "Board.html#editArticle",
                                                          "tf": 25
                                                        },
                                                        "Article.html#delete": {
                                                          "ref": "Article.html#delete",
                                                          "tf": 50
                                                        },
                                                        "Article.html#edit": {
                                                          "ref": "Article.html#edit",
                                                          "tf": 33.33333333333333
                                                        },
                                                        "Article.html#blockUser": {
                                                          "ref": "Article.html#blockUser",
                                                          "tf": 33.33333333333333
                                                        },
                                                        "Article.html#restrictCountry": {
                                                          "ref": "Article.html#restrictCountry",
                                                          "tf": 33.33333333333333
                                                        },
                                                        "Article.html#deleteComment": {
                                                          "ref": "Article.html#deleteComment",
                                                          "tf": 33.33333333333333
                                                        },
                                                        "Article.html#editComment": {
                                                          "ref": "Article.html#editComment",
                                                          "tf": 25
                                                        },
                                                        "Comment.html#delete": {
                                                          "ref": "Comment.html#delete",
                                                          "tf": 50
                                                        },
                                                        "Comment.html#edit": {
                                                          "ref": "Comment.html#edit",
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
                                                                              "Board.html#readArticle": {
                                                                                "ref": "Board.html#readArticle",
                                                                                "tf": 25
                                                                              },
                                                                              "Article.html#read": {
                                                                                "ref": "Article.html#read",
                                                                                "tf": 33.33333333333333
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
                                                        "tf": 33.33333333333333
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
                                                                                    "tf": 25
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
                                                        "tf": 33.33333333333333
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
                                "(": {
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
                                                  "|": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            ")": {
                                                              "docs": {},
                                                              "&": {
                                                                "docs": {},
                                                                "g": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {
                                                                      "RequestSession.html#_fetch": {
                                                                        "ref": "RequestSession.html#_fetch",
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
                                          "docs": {},
                                          "&": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "RequestSession.html#getBoard": {
                                                    "ref": "RequestSession.html#getBoard",
                                                    "tf": 33.33333333333333
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
                        "tf": 83.33333333333333
                      },
                      "Board.html#readArticle": {
                        "ref": "Board.html#readArticle",
                        "tf": 50
                      },
                      "Board.html#writeArticle": {
                        "ref": "Board.html#writeArticle",
                        "tf": 33.33333333333333
                      },
                      "Board.html#editArticle": {
                        "ref": "Board.html#editArticle",
                        "tf": 25
                      },
                      "Article.html": {
                        "ref": "Article.html",
                        "tf": 1916.6666666666667
                      },
                      "Article.html#edit": {
                        "ref": "Article.html#edit",
                        "tf": 33.33333333333333
                      }
                    },
                    "e": {
                      "docs": {},
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
                              "tf": 25
                            },
                            "Board.html#deleteArticle": {
                              "ref": "Board.html#deleteArticle",
                              "tf": 33.33333333333333
                            },
                            "Board.html#editArticle": {
                              "ref": "Board.html#editArticle",
                              "tf": 25
                            }
                          }
                        }
                      },
                      "#": {
                        "docs": {},
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
                                "Comment.CommentData.html": {
                                  "ref": "Comment.CommentData.html",
                                  "tf": 50
                                },
                                "Article.ArticleData.html": {
                                  "ref": "Article.ArticleData.html",
                                  "tf": 700
                                },
                                "Article.ArticleData.html#_freezeThis": {
                                  "ref": "Article.ArticleData.html#_freezeThis",
                                  "tf": 25
                                }
                              },
                              "#": {
                                "docs": {},
                                "_": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "z": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {
                                                      "Article.ArticleData.html#_freezeThis": {
                                                        "ref": "Article.ArticleData.html#_freezeThis",
                                                        "tf": 100
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
                                                "Article.ArticleData.html": {
                                                  "ref": "Article.ArticleData.html",
                                                  "tf": 1250
                                                },
                                                "Article.ArticleData.html#_freezeThis": {
                                                  "ref": "Article.ArticleData.html#_freezeThis",
                                                  "tf": 50
                                                }
                                              },
                                              "#": {
                                                "docs": {},
                                                "_": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "z": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {},
                                                                "h": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {
                                                                      "Article.ArticleData.html#_freezeThis": {
                                                                        "ref": "Article.ArticleData.html#_freezeThis",
                                                                        "tf": 1100
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
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "Article.ArticleData.html#_freezeThis": {
                                    "ref": "Article.ArticleData.html#_freezeThis",
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
          },
          "n": {
            "docs": {},
            "o": {
              "docs": {},
              "n": {
                "docs": {},
                "y": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "RequestSession.html#.anonymousSession": {
                                      "ref": "RequestSession.html#.anonymousSession",
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
                                  "tf": 683.3333333333334
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
                        "docs": {
                          "Article.html#writeComment": {
                            "ref": "Article.html#writeComment",
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
                    "tf": 683.3333333333334
                  },
                  "Comment.html#edit": {
                    "ref": "Comment.html#edit",
                    "tf": 675
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
                                "tf": 675
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
                      "docs": {
                        "Article.html#editComment": {
                          "ref": "Article.html#editComment",
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
                            "tf": 675
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
        "u": {
          "docs": {},
          "r": {
            "docs": {},
            "l": {
              "docs": {
                "RequestSession.html#_getCSRFToken": {
                  "ref": "RequestSession.html#_getCSRFToken",
                  "tf": 25
                },
                "RequestSession.html#fromUrl": {
                  "ref": "RequestSession.html#fromUrl",
                  "tf": 50
                }
              }
            }
          }
        }
      },
      "length": 252
    },
    "corpusTokens": [
      "_checksess",
      "_fetch",
      "_fetchstep",
      "_freezethi",
      "_getcsrftoken",
      "_loadcooki",
      "_login",
      "_makecookiestr",
      "_next",
      "anonymoussess",
      "articl",
      "article#blockus",
      "article#delet",
      "article#deletecom",
      "article#edit",
      "article#editcom",
      "article#read",
      "article#restrictcountri",
      "article#writecom",
      "article.articledata",
      "article.articledata#_freezethi",
      "article.read",
      "articledata",
      "articledata#_freezethi",
      "articleid",
      "base",
      "blockus",
      "board",
      "board#deletearticl",
      "board#editarticl",
      "board#getarticl",
      "board#querypag",
      "board#readarticl",
      "board#readpag",
      "board#writearticl",
      "boardnam",
      "board|articl",
      "bootstrap",
      "class",
      "closesess",
      "comment",
      "comment#delet",
      "comment#edit",
      "comment#read",
      "comment.commentdata",
      "comment.commentdata#_freezethi",
      "commentdata",
      "commentdata#_freezethi",
      "commentid",
      "countri",
      "csrf",
      "delet",
      "deletearticl",
      "deletecom",
      "document",
      "durat",
      "edit",
      "editarticl",
      "editcom",
      "fetch",
      "fetchqueu",
      "fetchqueue._fetchstep",
      "fetchqueue._next",
      "fetchqueue.fetch",
      "fetchqueue.paus",
      "fetchqueue.resum",
      "fetchqueue.setratelimit",
      "fetchqueue.stop",
      "foodoc",
      "fromurl",
      "function",
      "getarticl",
      "getboard",
      "global",
      "handlebar",
      "index",
      "init",
      "jsdoc3",
      "limit",
      "list",
      "list:class",
      "lt;static&gt",
      "newlimit",
      "nocach",
      "object",
      "option",
      "page",
      "paus",
      "promise.&lt;(response|node)&gt",
      "promise.&lt;array.&lt;article&gt;&gt",
      "promise.&lt;article&gt",
      "promise.&lt;article.articledata&gt",
      "promise.&lt;board&gt",
      "promise.&lt;comment&gt",
      "promise.&lt;response&gt",
      "querypag",
      "rate",
      "re",
      "read",
      "readarticl",
      "readm",
      "readpag",
      "reject",
      "requestsess",
      "requestsession#_checksess",
      "requestsession#_fetch",
      "requestsession#_getcsrftoken",
      "requestsession#_loadcooki",
      "requestsession#_login",
      "requestsession#_makecookiestr",
      "requestsession#closesess",
      "requestsession#fromurl",
      "requestsession#getboard",
      "requestsession#setanonym",
      "requestsession.anonymoussess",
      "resourc",
      "respons",
      "restrictcountri",
      "resum",
      "setanonym",
      "setratelimit",
      "stop",
      "string",
      "string|object",
      "templat",
      "tokennam",
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
      "title": "FooDoc",
      "longname": "index",
      "name": "FooDoc",
      "tags": "index",
      "summary": "A Bootstrap and Handlebars based template for JSDoc3.",
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
    "FetchQueue.html": {
      "id": "FetchQueue.html",
      "kind": "class",
      "title": "FetchQueue",
      "longname": "FetchQueue",
      "name": "FetchQueue",
      "tags": "FetchQueue",
      "summary": "",
      "description": "Fetch 큐 정적 클래스 호출할 경우 예외 발생",
      "body": ""
    },
    "FetchQueue.html#._next": {
      "id": "FetchQueue.html#._next",
      "kind": "function",
      "title": "&lt;static&gt; _next() → {Object}",
      "longname": "FetchQueue._next",
      "name": "_next",
      "tags": "FetchQueue._next _next",
      "summary": "",
      "description": "다음 Fetch 작업을 얻어온다."
    },
    "FetchQueue.html#._fetchStep": {
      "id": "FetchQueue.html#._fetchStep",
      "kind": "function",
      "title": "&lt;static&gt; _fetchStep()",
      "longname": "FetchQueue._fetchStep",
      "name": "_fetchStep",
      "tags": "FetchQueue._fetchStep _fetchStep",
      "summary": "",
      "description": "다음 Fetch 작업을 수행한다."
    },
    "FetchQueue.html#.setRateLimit": {
      "id": "FetchQueue.html#.setRateLimit",
      "kind": "function",
      "title": "&lt;static&gt; setRateLimit( newLimit )",
      "longname": "FetchQueue.setRateLimit",
      "name": "setRateLimit",
      "tags": "FetchQueue.setRateLimit setRateLimit",
      "summary": "",
      "description": "Rate Limit을 재설정한다. 각 fetch는 여기에서 지정한 제한값만큼의 시간을 대기하고 보내진다."
    },
    "FetchQueue.html#.pause": {
      "id": "FetchQueue.html#.pause",
      "kind": "function",
      "title": "&lt;static&gt; pause()",
      "longname": "FetchQueue.pause",
      "name": "pause",
      "tags": "FetchQueue.pause pause",
      "summary": "",
      "description": "Fetch를 일시정지한다."
    },
    "FetchQueue.html#.resume": {
      "id": "FetchQueue.html#.resume",
      "kind": "function",
      "title": "&lt;static&gt; resume()",
      "longname": "FetchQueue.resume",
      "name": "resume",
      "tags": "FetchQueue.resume resume",
      "summary": "",
      "description": "Fetch가 정지되어 있었을 경우 다시 시작한다."
    },
    "FetchQueue.html#.stop": {
      "id": "FetchQueue.html#.stop",
      "kind": "function",
      "title": "&lt;static&gt; stop()",
      "longname": "FetchQueue.stop",
      "name": "stop",
      "tags": "FetchQueue.stop stop",
      "summary": "",
      "description": "Fetch를 정지한다. 대기열의 모든 fetch는 전부 reject된다."
    },
    "FetchQueue.html#.fetch": {
      "id": "FetchQueue.html#.fetch",
      "kind": "function",
      "title": "&lt;static&gt; fetch( resource, init ) → {Promise.&lt;Response&gt;}",
      "longname": "FetchQueue.fetch",
      "name": "fetch",
      "tags": "FetchQueue.fetch fetch",
      "summary": "",
      "description": "새 fetch를 큐에 넣는다."
    },
    "Board.html": {
      "id": "Board.html",
      "kind": "class",
      "title": "Board",
      "longname": "Board",
      "name": "Board",
      "tags": "Board",
      "summary": "",
      "description": "새 게시판 객체 Board를 만든다. 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).",
      "body": ""
    },
    "Board.html#getArticle": {
      "id": "Board.html#getArticle",
      "kind": "function",
      "title": "getArticle( articleId ) → {Article}",
      "longname": "Board#getArticle",
      "name": "getArticle",
      "tags": "Board#getArticle getArticle",
      "summary": "",
      "description": "해당 게시판에 있는 게시글의 객체 Article을 얻어온다. 실제 존재 여부와 관계 없이 무조건 반환한다."
    },
    "Board.html#readArticle": {
      "id": "Board.html#readArticle",
      "kind": "function",
      "title": "readArticle( articleId, options ) → {Promise.&lt;Article.ArticleData&gt;}",
      "longname": "Board#readArticle",
      "name": "readArticle",
      "tags": "Board#readArticle readArticle",
      "summary": "",
      "description": "해당 게시판에 있는 게시글의 객체 Article을 읽는다. 존재하지 않을 경우 실패한다."
    },
    "Board.html#writeArticle": {
      "id": "Board.html#writeArticle",
      "kind": "function",
      "title": "writeArticle( article ) → {Promise.&lt;Article&gt;}",
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
      "title": "editArticle( articleId, article ) → {Promise.&lt;Response&gt;}",
      "longname": "Board#editArticle",
      "name": "editArticle",
      "tags": "Board#editArticle editArticle",
      "summary": "",
      "description": "해당 게시판에서 글을 수정한다."
    },
    "Board.html#queryPage": {
      "id": "Board.html#queryPage",
      "kind": "function",
      "title": "queryPage( page, options ) → {Promise.&lt;Array.&lt;Article&gt;&gt;}",
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
    "Article.html#read": {
      "id": "Article.html#read",
      "kind": "function",
      "title": "read( options ) → {Promise.&lt;Article.ArticleData&gt;}",
      "longname": "Article#read",
      "name": "read",
      "tags": "Article#read read",
      "summary": "",
      "description": "해당 게시글을 fetch한다. 만일 이미 읽어온 게시글일 경우, fetch 없이 정보를 그대로 반환한다."
    },
    "Article.html#delete": {
      "id": "Article.html#delete",
      "kind": "function",
      "title": "delete() → {Promise.&lt;Response&gt;}",
      "longname": "Article#delete",
      "name": "delete",
      "tags": "Article#delete delete",
      "summary": "",
      "description": "해당 게시글을 삭제한다."
    },
    "Article.html#edit": {
      "id": "Article.html#edit",
      "kind": "function",
      "title": "edit( article ) → {Promise.&lt;Response&gt;}",
      "longname": "Article#edit",
      "name": "edit",
      "tags": "Article#edit edit",
      "summary": "",
      "description": "해당 게시글을 수정한다."
    },
    "Article.html#blockUser": {
      "id": "Article.html#blockUser",
      "kind": "function",
      "title": "blockUser( duration ) → {Promise.&lt;Response&gt;}",
      "longname": "Article#blockUser",
      "name": "blockUser",
      "tags": "Article#blockUser blockUser",
      "summary": "",
      "description": "해당 게시글의 작성자를 차단한다."
    },
    "Article.html#restrictCountry": {
      "id": "Article.html#restrictCountry",
      "kind": "function",
      "title": "restrictCountry( countries ) → {Promise.&lt;Response&gt;}",
      "longname": "Article#restrictCountry",
      "name": "restrictCountry",
      "tags": "Article#restrictCountry restrictCountry",
      "summary": "",
      "description": "해당 게시글을 볼 수 없는 국가를 설정한다."
    },
    "Article.html#writeComment": {
      "id": "Article.html#writeComment",
      "kind": "function",
      "title": "writeComment( comment ) → {Promise.&lt;Comment&gt;}",
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
    "Comment.html": {
      "id": "Comment.html",
      "kind": "class",
      "title": "Comment",
      "longname": "Comment",
      "name": "Comment",
      "tags": "Comment",
      "summary": "",
      "description": "새 댓글 객체 Comment를 만든다. 생성시에는 존재 여부를 확인하지 않는다(Rate Limit때문).",
      "body": ""
    },
    "Comment.html#read": {
      "id": "Comment.html#read",
      "kind": "function",
      "title": "read() → {Comment.CommentData}",
      "longname": "Comment#read",
      "name": "read",
      "tags": "Comment#read read",
      "summary": "",
      "description": "해당 댓글을 읽는다."
    },
    "Comment.html#delete": {
      "id": "Comment.html#delete",
      "kind": "function",
      "title": "delete() → {Promise.&lt;Response&gt;}",
      "longname": "Comment#delete",
      "name": "delete",
      "tags": "Comment#delete delete",
      "summary": "",
      "description": "해당 댓글을 삭제한다."
    },
    "Comment.html#edit": {
      "id": "Comment.html#edit",
      "kind": "function",
      "title": "edit( commentId, comment ) → {Promise.&lt;Response&gt;}",
      "longname": "Comment#edit",
      "name": "edit",
      "tags": "Comment#edit edit",
      "summary": "",
      "description": "해당 게시글에 작성된 댓글을 수정한다. 수정하더라도 commentData는 수정되지 않는다."
    },
    "RequestSession.html": {
      "id": "RequestSession.html",
      "kind": "class",
      "title": "RequestSession",
      "longname": "RequestSession",
      "name": "RequestSession",
      "tags": "RequestSession",
      "summary": "",
      "description": "새 요청 세션 RequestSession을 만든다.",
      "body": ""
    },
    "RequestSession.html#.anonymousSession": {
      "id": "RequestSession.html#.anonymousSession",
      "kind": "function",
      "title": "&lt;static&gt; anonymousSession() → {RequestSession}",
      "longname": "RequestSession.anonymousSession",
      "name": "anonymousSession",
      "tags": "RequestSession.anonymousSession anonymousSession",
      "summary": "",
      "description": "익명의 요청 세션을 얻는다."
    },
    "RequestSession.html#setAnonymous": {
      "id": "RequestSession.html#setAnonymous",
      "kind": "function",
      "title": "setAnonymous() → {RequestSession}",
      "longname": "RequestSession#setAnonymous",
      "name": "setAnonymous",
      "tags": "RequestSession#setAnonymous setAnonymous",
      "summary": "",
      "description": "현재 세션이 익명 세션일 경우 익명 사용자의 닉네임과 비밀번호를 설정한다. 익명 세션이 아닐 경우 예외가 발생한다."
    },
    "RequestSession.html#_loadCookies": {
      "id": "RequestSession.html#_loadCookies",
      "kind": "function",
      "title": "_loadCookies( res ) → {Response}",
      "longname": "RequestSession#_loadCookies",
      "name": "_loadCookies",
      "tags": "RequestSession#_loadCookies _loadCookies",
      "summary": "",
      "description": "요청의 헤더에서 현재 세션의 쿠키 값을 설정한다."
    },
    "RequestSession.html#_makeCookieString": {
      "id": "RequestSession.html#_makeCookieString",
      "kind": "function",
      "title": "_makeCookieString() → {string}",
      "longname": "RequestSession#_makeCookieString",
      "name": "_makeCookieString",
      "tags": "RequestSession#_makeCookieString _makeCookieString",
      "summary": "",
      "description": "현재 세션의 쿠키 값을 문자열로 반환한다."
    },
    "RequestSession.html#_getCSRFToken": {
      "id": "RequestSession.html#_getCSRFToken",
      "kind": "function",
      "title": "_getCSRFToken( url, tokenName ) → {string|Object}",
      "longname": "RequestSession#_getCSRFToken",
      "name": "_getCSRFToken",
      "tags": "RequestSession#_getCSRFToken _getCSRFToken",
      "summary": "",
      "description": "해당 페이지에서 CSRF 토큰을 얻어온다."
    },
    "RequestSession.html#_checkSession": {
      "id": "RequestSession.html#_checkSession",
      "kind": "function",
      "title": "_checkSession()",
      "longname": "RequestSession#_checkSession",
      "name": "_checkSession",
      "tags": "RequestSession#_checkSession _checkSession",
      "summary": "",
      "description": "해당 세션의 로그인 상태를 확인한다. 로그아웃되었을 경우 다시 로그인한다."
    },
    "RequestSession.html#_login": {
      "id": "RequestSession.html#_login",
      "kind": "function",
      "title": "_login()",
      "longname": "RequestSession#_login",
      "name": "_login",
      "tags": "RequestSession#_login _login",
      "summary": "",
      "description": "해당 세션의 로그인 정보로 로그인을 시도한다. 성공 결과와는 관계없이 반환한다."
    },
    "RequestSession.html#_fetch": {
      "id": "RequestSession.html#_fetch",
      "kind": "function",
      "title": "_fetch( resource, init ) → {Promise.&lt;(Response|Node)&gt;}",
      "longname": "RequestSession#_fetch",
      "name": "_fetch",
      "tags": "RequestSession#_fetch _fetch",
      "summary": "",
      "description": "해당 세션에서 fetch 요청을 보낸다."
    },
    "RequestSession.html#getBoard": {
      "id": "RequestSession.html#getBoard",
      "kind": "function",
      "title": "getBoard( boardName ) → {Promise.&lt;Board&gt;}",
      "longname": "RequestSession#getBoard",
      "name": "getBoard",
      "tags": "RequestSession#getBoard getBoard",
      "summary": "",
      "description": "해당 게시판을 얻어온다."
    },
    "RequestSession.html#fromUrl": {
      "id": "RequestSession.html#fromUrl",
      "kind": "function",
      "title": "fromUrl( boardName ) → {Board|Article}",
      "longname": "RequestSession#fromUrl",
      "name": "fromUrl",
      "tags": "RequestSession#fromUrl fromUrl",
      "summary": "",
      "description": "URL에서 게시판 혹은 게시글을 얻어온다."
    },
    "RequestSession.html#closeSession": {
      "id": "RequestSession.html#closeSession",
      "kind": "function",
      "title": "closeSession()",
      "longname": "RequestSession#closeSession",
      "name": "closeSession",
      "tags": "RequestSession#closeSession closeSession",
      "summary": "",
      "description": "세션을 닫는다."
    },
    "Comment.CommentData.html": {
      "id": "Comment.CommentData.html",
      "kind": "class",
      "title": "Comment.CommentData",
      "longname": "Comment.CommentData",
      "name": "CommentData",
      "tags": "Comment.CommentData CommentData",
      "summary": "",
      "description": "새 댓글 정보 객체 ArticleData를 만든다.",
      "body": ""
    },
    "Comment.CommentData.html#_freezeThis": {
      "id": "Comment.CommentData.html#_freezeThis",
      "kind": "function",
      "title": "_freezeThis() → {Comment.CommentData}",
      "longname": "Comment.CommentData#_freezeThis",
      "name": "_freezeThis",
      "tags": "Comment.CommentData#_freezeThis CommentData#_freezeThis _freezeThis",
      "summary": "",
      "description": "CommentData를 고정한다. Comment 생성 후 값을 변경하지 않도록 호출해 줌."
    },
    "Article.ArticleData.html": {
      "id": "Article.ArticleData.html",
      "kind": "class",
      "title": "Article.ArticleData",
      "longname": "Article.ArticleData",
      "name": "ArticleData",
      "tags": "Article.ArticleData ArticleData",
      "summary": "",
      "description": "새 게시글 정보 객체 ArticleData를 만든다.",
      "body": ""
    },
    "Article.ArticleData.html#_freezeThis": {
      "id": "Article.ArticleData.html#_freezeThis",
      "kind": "function",
      "title": "_freezeThis() → {Article.ArticleData}",
      "longname": "Article.ArticleData#_freezeThis",
      "name": "_freezeThis",
      "tags": "Article.ArticleData#_freezeThis ArticleData#_freezeThis _freezeThis",
      "summary": "",
      "description": "ArticleData를 고정한다. Article.read() 수행 후 값을 변경하지 않도록 호출해 줌."
    }
  }
};