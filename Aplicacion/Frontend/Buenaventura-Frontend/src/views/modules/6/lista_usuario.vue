<template>

    <div class="w-full mx-auto p-4">
      <h1 class="title"><b>LISTA DE USUARIOS DE BUENAVENTURA</b></h1>
  
      <!-- Botón de nuevo usuario -->
      <button class="new-plan-button" @click="redirectToCreate"><b>Nuevo usuario</b></button>
  
      <!-- Buscadores -->
      <div class="search-container">
        <div class="search-box">
          <input
            v-model="searchDate"
            type="date"
            placeholder="Buscar por Fecha de Ingreso"
          />
          <button class="search-button" @click="searchByDate">Buscar</button>
        </div>
        <button class="refresh-button" @click="refreshPage">Refrescar</button>
      </div>
  
      <!-- Tabla de usuarios -->
      <table class="maintenance-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Email de Contacto</th>
            <th>Número de Contacto</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataList" :key="index">
            <td>{{ item.nombre }}</td>
            <td>{{ item.dni }}</td>
            <td>{{ item.emailContacto }}</td>
            <td>{{ item.numeroContacto }}</td>
            <td>{{ roles[item.idCargo] }}</td>
            <td>
              <button class="action-button" @click="redirectToDetail(item.id_empleado)">Ver</button>
              <button class="action-button" @click="redirectToEdit(item.id_empleado)">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Paginación -->
      <div class="pagination">
        <button
          class="pagination-button"
          @click="fetchData(1)"
          :disabled="currentPage === 1"
        >
          Primero
        </button>
        <button
          class="pagination-button"
          @click="fetchData(currentPage - 1)"
          :disabled="currentPage === 1"
        >
          Anterior
        </button>
  
        <button
          v-for="page in visiblePages"
          :key="page"
          :class="['pagination-button', { active: page === currentPage }]"
          @click="fetchData(page)"
        >
          {{ page }}
        </button>
  
        <button
          class="pagination-button"
          @click="fetchData(currentPage + 1)"
          :disabled="currentPage === totalPages"
        >
          Siguiente
        </button>
      </div>
    </div>

  </template>
  <script>
  import axios from "axios";
  import { useEmployeeStore } from "@/stores/user";
  export default {
    setup() {
      const userStore = useEmployeeStore()
      return {
        userStore
      }
    },
    data() {
      return {
        roles: {
          1:	"Jefe",
          2:	"Técnico",
          3:	"Supervisor",
          4:	"Encargado de sistema"
        },
        dataList: [],
        currentPage: 1,
        totalPages: 0,
        visiblePages: [],
        itemsPerPage: 10,
        searchMachineId: "",
        searchDate: ""
      };
    },
    methods: {
      async fetchData(page) {
        try {
          const offset = (page - 1) * this.itemsPerPage + 1;
          const response = await axios.get(`/api/seguridad/todos?offset=${offset}`);
          this.dataList = response.data;
          this.currentPage = page;
          this.updateVisiblePages();
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      },
      changePage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.fetchData(page);
        }
      },
      updateVisiblePages() {
        const maxVisible = 5;
        const pages = [];
        const startPage = Math.max(this.currentPage - Math.floor(maxVisible / 2), 1);
        const endPage = Math.min(startPage + maxVisible - 1, this.totalPages);
  
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }
  
        this.visiblePages = pages;
      },
      redirectToDetail(idEmpleado) {
        window.location.href = `http://localhost:5173/moduloplanificacion/detalle_empleado/${idEmpleado}`;
      },
      redirectToEdit(idEmpleado) {
        window.location.href = `http://localhost:5173/moduloplanificacion/edita_empleado/${idEmpleado}`;
      },
      redirectToCreate() {
        window.location.href = "http://localhost:5173/moduloseguridad/crea_usuario";
      },
  
      refreshPage() {
        this.searchMachineId = "";
        this.searchDate = "";
        this.fetchData(1);
      },
  
      async searchByMachine() {
        try {
          const offset = (this.currentPage - 1) * this.itemsPerPage + 1;
          const response = await axios.get(`/api/empleados/listaEmpleadosPorNombre/${offset}/${this.searchMachineId}`);
          this.dataList = response.data;
        } catch (error) {
          console.error("Error al buscar por nombre:", error);
        }
      },
      async searchByDate() {
        try {
          const offset = (this.currentPage - 1) * this.itemsPerPage + 1;
          const response = await axios.get(`/api/empleados/listaEmpleadosPorFechaIngreso/${offset}/${this.searchDate}`);
          this.dataList = response.data;
        } catch (error) {
          console.error("Error al buscar por fecha de ingreso:", error);
        }
      }
    },
    mounted() {
      this.fetchData(this.currentPage);
    }
  };
  </script>
  
  <style scoped>
  /* Título */
  .title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  /* Botón nuevo usuario */
  .new-plan-button {
    background-color: #1414b8;
    color: white;
    border: none;
    padding: 10px 25px;
    cursor: pointer;
    float: right;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .new-plan-button:hover {
    background-color: #0056b3;
  }
  
  /* Buscadores */
  .search-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  .search-box {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .search-box input {
    padding: 5px;
    width: 180px;
    border: 1px solid black;
    border-radius: 5px;
  }
  .search-button {
    padding: 5px 10px;
    border: 1px solid gray;
    background-color: #f0f0f0;
    cursor: pointer;
  }
  .search-button:hover {
    background-color: #e0e0e0;
  }
  
  /* Botón Refrescar */
  .refresh-button {
    padding: 5px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  .refresh-button:hover {
    background-color: #0056b3;
  }
  
  /* Tabla */
  .maintenance-table {
    width: 100%;
    border-collapse: collapse;
  }
  .maintenance-table th,
  .maintenance-table td {
    padding: 8px;
    text-align: center;
    border: 1px solid #ddd;
  }
  .maintenance-table th {
    background-color: #f2f2f2;
  }
  
  /* Botones de acción */
  .action-button {
    background-color: green;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin-right: 5px;
  }
  .action-button:hover {
    background-color: darkgreen;
  }
  
  /* Paginación */
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  .pagination-button {
    background-color: #e0f7ff;
    border: 1px solid #007bff;
    padding: 5px 10px;
    cursor: pointer;
    color: #007bff;
  }
  .pagination-button:hover {
    background-color: #cceeff;
  }
  button.active {
    background-color: #007bff;
    color: white;
  }
  </style>
  