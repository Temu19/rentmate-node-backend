# Database Design for RentMate

## Database Schema

### Users

- id: int
- username: string
- password: string
- email: string
- is_verified: boolean
- is_active: boolean
- created_at: datetime
- updated_at: datetime
- is_deleted: boolean
- deleted_at: datetime

### Listings

- _id: int
- title: string
- description: string
- userRef: string
- imageURLs: string
- price: string
- discountprice: string
- furnished: boolean
- property_type : string
- bathrooms: string
- bedrooms: string
- location: string
- created_at: datetime
- updated_at: datetime
- is_deleted: boolean
- deleted_at: datetime

----------------------------------
