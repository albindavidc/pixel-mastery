import { Module } from '../types';

export const htmlModules: Module[] = [
  {
    id: 'html-beginner',
    category: 'html',
    title: 'Beginner',
    description: 'Learn the foundational building blocks of every webpage on the internet.',
    content: `{"tags":["<!DOCTYPE>","<html>","<head>","<body>","<title>","<meta>","<link>","<script>","<div>","<span>","<h1>","<h2>","<h3>","<h4>","<h5>","<h6>","<p>","<br>","<hr>","<a>","<img>","<ul>","<ol>","<li>","<form>","<label>","<input>","<textarea>","<select>","<option>","<button>","<dl>","<dt>","<dd>"],"categories":[{"name":"Document Structure","color":"indigo","tags":["<!DOCTYPE>","<html>","<head>","<body>","<title>","<meta>","<link>","<script>"]},{"name":"Layout & Containers","color":"emerald","tags":["<div>","<span>"]},{"name":"Headings & Text","color":"rose","tags":["<h1>","<h2>","<h3>","<h4>","<h5>","<h6>","<p>","<br>","<hr>"]},{"name":"Links & Media","color":"amber","tags":["<a>","<img>"]},{"name":"Lists","color":"cyan","tags":["<ul>","<ol>","<li>","<dl>","<dt>","<dd>"]},{"name":"Forms","color":"teal","tags":["<form>","<label>","<input>","<textarea>","<select>","<option>","<button>"]}]}`,
    // groupId: 'html',
    // groupTitle: 'HTML',
    examples: [],
    challenge: { description: '', targetClasses: [] }
  },
  {
    id: 'html-intermediate',
    category: 'html',
    title: 'Intermediate',
    description: 'Master semantic meaning, complex media, and robust accessible structures.',
    content: `{"tags": ["<header>", "<main>", "<section>", "<article>", "<aside>", "<footer>", "<nav>", "<strong>", "<em>", "<small>", "<mark>", "<code>", "<pre>", "<blockquote>", "<q>", "<cite>", "<time>", "<picture>", "<source>", "<video>", "<audio>", "<figure>", "<figcaption>", "<iframe>", "<details>", "<summary>", "<fieldset>", "<legend>", "<datalist>", "<optgroup>", "<output>", "<progress>", "<meter>", "<table>", "<thead>", "<tbody>", "<tfoot>", "<tr>", "<th>", "<td>", "<caption>", "<colgroup>", "<col>"], "categories": [{"name": "Semantic Layout", "color": "indigo", "tags": ["<header>", "<main>", "<section>", "<article>", "<aside>", "<footer>", "<nav>"]}, {"name": "Text Semantics", "color": "emerald", "tags": ["<strong>", "<em>", "<small>", "<mark>", "<code>", "<pre>", "<blockquote>", "<q>", "<cite>", "<time>"]}, {"name": "Media", "color": "rose", "tags": ["<picture>", "<source>", "<video>", "<audio>", "<figure>", "<figcaption>", "<iframe>"]}, {"name": "Interactive Elements", "color": "amber", "tags": ["<details>", "<summary>"]}, {"name": "Advanced Forms", "color": "cyan", "tags": ["<fieldset>", "<legend>", "<datalist>", "<optgroup>", "<output>", "<progress>", "<meter>"]}, {"name": "Tables", "color": "teal", "tags": ["<table>", "<thead>", "<tbody>", "<tfoot>", "<tr>", "<th>", "<td>", "<caption>", "<colgroup>", "<col>"]}]}`,
    // groupId: 'html',
    // groupTitle: 'HTML',
    examples: [],
    challenge: { description: '', targetClasses: [] }
  },
  {
    id: 'html-master',
    category: 'html',
    title: 'Master',
    description: 'Deep dive into advanced rendering, internationalization, and micro-semantics.',
    content: `{"tags": ["<canvas>", "<svg>", "<template>", "<noscript>", "<abbr>", "<bdi>", "<bdo>", "<ruby>", "<rt>", "<rp>", "<address>", "<kbd>", "<samp>", "<var>", "<del>", "<ins>", "<dfn>", "<sub>", "<sup>", "<wbr>"], "categories": [{"name": "Graphics & Rendering", "color": "indigo", "tags": ["<canvas>", "<svg>"]}, {"name": "Templates & Progressive Enhancement", "color": "emerald", "tags": ["<template>", "<noscript>"]}, {"name": "Accessibility & Internationalization", "color": "rose", "tags": ["<abbr>", "<bdi>", "<bdo>", "<ruby>", "<rt>", "<rp>"]}, {"name": "Document Metadata & Contact", "color": "amber", "tags": ["<address>"]}, {"name": "Developer & Technical Text", "color": "cyan", "tags": ["<kbd>", "<samp>", "<var>"]}, {"name": "Document Editing & Revisions", "color": "teal", "tags": ["<del>", "<ins>"]}, {"name": "Definitions & Terminology", "color": "pink", "tags": ["<dfn>"]}, {"name": "Typography", "color": "violet", "tags": ["<sub>", "<sup>", "<wbr>"]}]}`,
    // groupId: 'html',
    // groupTitle: 'HTML',
    examples: [],
    challenge: { description: '', targetClasses: [] }
  }
];
