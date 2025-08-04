# Sweety - Blood Glucose Tracking Application
## Take-Home Assignment for Ruby on Rails Developer

---

## Overview
Sweety is a web application that enables users to input and track blood glucose readings and view comprehensive reports. This assignment focuses on backend architecture, API design, testing strategy, and your approach to solving real-world problems.

**Time Allocation:** 4-6 hours  
**Focus:** We care more about your problem-solving approach, code organization, and testing strategy than perfect UI aesthetics.

---

## User Stories

### Primary Users
- **Diabetes Patients:** Track blood glucose levels 4x daily and monitor trends
- **Future Doctors:** Access patient data for medical review (bonus consideration)

### Core Functionality

**Data Entry Requirements:**
- Users can enter up to 4 blood glucose readings per day
- Each reading is an integer value (mg/dl)
- Readings must be validated for:
  - Required value presence
  - Maximum 4 entries per day
  - Reasonable glucose range (40-600 mg/dl)
  - No duplicate entries for the same time slot

**Reporting Requirements:**
- **Daily Report:** All readings for a selected date
- **Month-to-Date Report:** From 1st of month to selected date
- **Monthly Report:** Complete previous month's data
- Each report shows: Maximum, Minimum, Average readings
- Reports should be accessible via both web interface and API

---

## Technical Requirements

### Core Stack
- **Ruby on Rails** (any recent version)
- **RSpec** and **Capybara** for testing

### API Requirements
- Design RESTful API endpoints with proper HTTP methods
- Include API versioning (v1)
- Return JSON responses with appropriate status codes
- Implement proper error handling and validation messages
- Support both web forms and API-only interactions

### Background Processing
- Implement a background job using **Sidekiq** for:
  - Daily reading reminders (bonus)
  - Report generation for large datasets (bonus)
  - Data cleanup tasks (bonus)

### Performance & Optimization
- Include database indexes for frequently queried fields
- Optimize report queries to avoid N+1 problems
- Add **Redis** caching for expensive report calculations (bonus)
- Handle large datasets efficiently (consider pagination)

---

## Deliverables

### 1. Core Application
```
Required Features:
□ User authentication (simple email/password)
□ Blood glucose reading CRUD operations
□ Three report types with date selection
□ Input validation and error handling
□ Responsive Bootstrap UI
```

### 2. API Endpoints
```
Required API Routes:
POST   /api/v1/readings
GET    /api/v1/readings
GET    /api/v1/reports/daily?date=YYYY-MM-DD
GET    /api/v1/reports/monthly?date=YYYY-MM-DD
GET    /api/v1/reports/month_to_date?date=YYYY-MM-DD
```

### 3. Testing Suite
```
Required Test Coverage:
□ Model validations and business logic
□ Controller actions and API responses  
□ Integration tests with Capybara
□ API endpoint testing
□ Edge cases (boundary conditions, invalid data)
□ Minimum 85% test coverage
```

### 4. Development Environment
```
Required Setup:
□ Docker Compose configuration
□ Database seeds with sample data
□ Environment variable configuration
□ Clear README with setup instructions
```

---

## Bonus Features *(Choose 1-2)*

**Data Processing:**
- CSV export functionality for readings
- Data import from CSV files
- Automated data validation and cleanup

**Advanced Reporting:**
- Graphical charts using Chart.js or similar
- Trend analysis (improving/declining patterns)
- Comparison reports (month-over-month)

**System Architecture:**
- Background job for daily reminders
- Email notifications for concerning readings
- Basic caching strategy implementation

**Multi-tenancy Preparation:**
- Design considerations for doctor-patient relationships
- Role-based access control foundation
- API rate limiting

---

## Evaluation Criteria

### Architecture & Design (30%)
- Database schema design and relationships
- Code organization and Rails conventions
- Separation of concerns (models, controllers, services)
- API design and REST principles

### Code Quality (25%)
- Clean, readable, and maintainable code
- Proper error handling and edge cases
- Security considerations (SQL injection, XSS prevention)
- Git commit history and meaningful messages

### Testing Strategy (25%)
- Comprehensive test coverage
- Quality of test cases and edge case handling
- Integration between different components
- API testing and validation

### Problem Solving (20%)
- Validation logic implementation
- Query optimization and performance
- Handling of complex date-based calculations
- Documentation of architectural decisions

---

## Submission Requirements

### Code Repository
- **GitHub repository** with clear commit history
- **README.md** with setup and running instructions
- **NOTES.md** explaining your architectural decisions and trade-offs

### Documentation
```
Include in NOTES.md:
• Database design decisions
• API design rationale
• Testing approach and coverage
• Performance optimization choices
• Security considerations implemented
• Areas for improvement with more time
• Assumptions made during development
```

### Docker Setup
```
Provide working Docker configuration:
• docker-compose.yml for full application stack
• Dockerfile for Rails application
• Database initialization and seeding
• Environment variable examples
```

---

## Sample Data Structure

```ruby
# Example seed data
User.create!(
  email: 'patient@example.com',
  password: 'password123'
)

BloodGlucoseReading.create!(
  user: user,
  reading_value: 120,
  recorded_at: Time.current,
  reading_type: 'morning' # morning, afternoon, evening, bedtime
)
```

---

## Getting Started

1. **Fork this assignment** or create a new Rails application
2. **Set up Docker environment** with PostgreSQL and Redis
3. **Implement core models** and associations first
4. **Build API endpoints** with proper validation
5. **Add comprehensive tests** as you develop
6. **Create basic UI** for data entry and reports
7. **Document your decisions** and submit

---

## Questions?

If you have any clarifications needed about requirements, please document your assumptions in the NOTES.md file and proceed with reasonable interpretations.

**Submission Deadline:** Please complete within 7 days of receiving this assignment.

---

*This assignment tests your ability to build production-ready Rails applications with proper testing, API design, and architectural thinking. Focus on demonstrating your problem-solving approach and technical decision-making process.*