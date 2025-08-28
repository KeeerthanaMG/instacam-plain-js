import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockAdminData = [
  {
    id: 1,
    username: "johndoe",
    email: "john@example.com",
    points: 1250,
    flags: 0,
    status: "active",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    username: "sarahwilson",
    email: "sarah@example.com",
    points: 890,
    flags: 1,
    status: "warning",
    joinDate: "2024-02-03",
  },
  {
    id: 3,
    username: "mikejohnson",
    email: "mike@example.com",
    points: 2340,
    flags: 0,
    status: "active",
    joinDate: "2023-12-10",
  },
];

export const Admin = () => {
  const [users, setUsers] = useState(mockAdminData);
  const [sortBy, setSortBy] = useState("points");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSort = (field: string) => {
    const sorted = [...users].sort((a, b) => {
      if (field === "points") return b.points - a.points;
      if (field === "flags") return b.flags - a.flags;
      return a.username.localeCompare(b.username);
    });
    setUsers(sorted);
    setSortBy(field);
  };

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string, flags: number) => {
    if (flags > 0) return <Badge variant="destructive">Flagged</Badge>;
    if (status === "active") return <Badge variant="default">Active</Badge>;
    return <Badge variant="secondary">Warning</Badge>;
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-8">Admin Dashboard</h1>
      
      {/* Controls */}
      <div className="bg-card rounded-xl p-6 card-shadow mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">User Management</h2>
          
          <div className="flex items-center space-x-4">
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64"
            />
            
            <div className="flex space-x-2">
              <Button
                variant={sortBy === "points" ? "default" : "outline"}
                onClick={() => handleSort("points")}
                size="sm"
              >
                Sort by Points
              </Button>
              <Button
                variant={sortBy === "flags" ? "default" : "outline"}
                onClick={() => handleSort("flags")}
                size="sm"
              >
                Sort by Flags
              </Button>
              <Button
                variant={sortBy === "username" ? "default" : "outline"}
                onClick={() => handleSort("username")}
                size="sm"
              >
                Sort by Name
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-accent rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">{users.length}</div>
            <div className="text-sm text-muted-foreground">Total Users</div>
          </div>
          <div className="bg-accent rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {users.filter(u => u.status === "active").length}
            </div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="bg-accent rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-600">
              {users.filter(u => u.flags > 0).length}
            </div>
            <div className="text-sm text-muted-foreground">Flagged Users</div>
          </div>
          <div className="bg-accent rounded-lg p-4 text-center">
            <div className="text-2xl font-bold">
              {Math.round(users.reduce((sum, u) => sum + u.points, 0) / users.length)}
            </div>
            <div className="text-sm text-muted-foreground">Avg Points</div>
          </div>
        </div>

        {/* Users Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Points</TableHead>
              <TableHead>Flags</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.points.toLocaleString()}</TableCell>
                <TableCell>{user.flags}</TableCell>
                <TableCell>{getStatusBadge(user.status, user.flags)}</TableCell>
                <TableCell>{user.joinDate}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    {user.flags > 0 && (
                      <Button variant="destructive" size="sm">
                        Ban
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};