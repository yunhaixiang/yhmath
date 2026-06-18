+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
slug = '{{ substr (md5 (printf "%s-%s" .Date .File.ContentBaseName)) 0 7 }}'
aliases = ['/posts/{{ .File.ContentBaseName | urlize }}/']
+++
