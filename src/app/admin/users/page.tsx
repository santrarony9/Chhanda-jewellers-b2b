"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, UserPlus, ShieldAlert } from "lucide-react"

export default function UserManagement() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })
    const [error, setError] = useState("")

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const res = await fetch("/api/users")
            const data = await res.json()
            if (data.success) {
                setUsers(data.data)
            }
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        try {
            const res = await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            const data = await res.json()
            if (data.success) {
                setFormData({ name: "", email: "", password: "" })
                setIsAddOpen(false)
                fetchUsers()
            } else {
                setError(data.message)
            }
        } catch (err) {
            setError("Failed to create user")
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this user?")) return

        try {
            const res = await fetch(`/api/users/${id}`, { method: "DELETE" })
            const data = await res.json()
            if (data.success) {
                fetchUsers()
            } else {
                alert(data.message)
            }
        } catch (err) {
            alert("Failed to delete")
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8 pt-20">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-serif text-white font-bold">User Management</h1>
                    <div className="flex gap-4">
                        <Button variant="outline" onClick={() => window.location.href = '/admin'}>
                            Back to Dashboard
                        </Button>
                        <Button className="bg-primary text-black" onClick={() => setIsAddOpen(!isAddOpen)}>
                            <UserPlus className="h-4 w-4 mr-2" />
                            Add Admin
                        </Button>
                    </div>
                </div>

                {isAddOpen && (
                    <div className="bg-surface-dark border border-surface-light rounded-xl p-6 mb-8 max-w-2xl mx-auto">
                        <h3 className="text-xl text-white mb-4">Add New Admin</h3>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <form onSubmit={handleAddUser} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="bg-black/50 border-gray-700 text-white"
                                />
                                <Input
                                    placeholder="Email Address"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="bg-black/50 border-gray-700 text-white"
                                />
                            </div>
                            <Input
                                placeholder="Password"
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                                className="bg-black/50 border-gray-700 text-white"
                            />
                            <div className="flex justify-end gap-2">
                                <Button type="button" variant="ghost" onClick={() => setIsAddOpen(false)}>Cancel</Button>
                                <Button type="submit" className="bg-primary text-black">Create User</Button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="bg-surface-dark border border-surface-light rounded-xl overflow-hidden">
                    <div className="p-6 border-b border-surface-light">
                        <h3 className="text-lg font-medium text-white flex items-center">
                            <ShieldAlert className="h-5 w-5 mr-2 text-primary" />
                            Admin Staff ({users.length})
                        </h3>
                    </div>
                    <div className="divide-y divide-surface-light">
                        {loading ? (
                            <div className="p-8 text-center text-gray-400">Loading users...</div>
                        ) : users.length === 0 ? (
                            <div className="p-8 text-center text-gray-400">No users found.</div>
                        ) : (
                            users.map((user: any) => (
                                <div key={user._id} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
                                    <div>
                                        <p className="font-medium text-white">{user.name}</p>
                                        <p className="text-sm text-gray-400">{user.email}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs uppercase font-bold">
                                            {user.role}
                                        </span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-red-400 hover:text-red-500 hover:bg-red-500/10"
                                            onClick={() => handleDelete(user._id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
