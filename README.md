# 🏎️ F1 Explorer - .NET 9 Learning Project

A minimalist ASP.NET Core Razor Pages application for exploring Formula 1 data through public APIs. Built as a hands-on study of modern .NET architecture, clean code practices, and API integration.

![Status](https://img.shields.io/badge/status-early_development-orange) ![.NET](https://img.shields.io/badge/.NET-9.0-purple)

## 🚧 Project Status: Early Development

This is an evolving learning project where I'm implementing and experimenting with:
- .NET 9's latest features in a real-world scenario
- Clean layer separation (Presentation → Services → Data)
- API consumption patterns with HttpClientFactory
- Gradual implementation of architectural patterns

## 🎯 Current Learning Focus

- **Foundation**: Setting up the project structure with Razor Pages
- **API Integration**: Connecting to F1 APIs (Ergast/OpenF1)
- **Basic Architecture**: Implementing service layer and DTO patterns
- **Iterative Improvement**: Adding features and refinements step by step

## 🏗️ Planned Architecture

```
Formula1Project/
├── F1DataHub/          # Razor Pages (UI Layer)
├── F1DataHub.Service/       # Business logic & API clients
├── F1DataHub.Models/         # DTOs & ViewModels
├── F1DataHub.Infrastructure/ # Cross-cutting concerns (future)
```

## 🛠️ Tech Stack

- **.NET 9** - Latest framework with performance improvements
- **Razor Pages** - Page-focused framework for dynamic web apps
- **HttpClientFactory** - For managing HTTP client lifetimes
- **Minimal Dependencies** - Focusing on core concepts first

## 📚 Learning Objectives

This project serves as my practical lab for exploring:

- Proper separation of concerns in .NET applications
- Effective API consumption patterns with typed clients
- Clean code practices in a real project context
- Incremental architecture improvement
- Testing strategies for external API integration

## 🔄 Next Steps

1. Set up basic Razor Pages structure
2. Integrate with Ergast API for historical data
3. Implement first service layer with typed HttpClient
4. Create basic DTOs and ViewModels
5. Add error handling and basic caching
