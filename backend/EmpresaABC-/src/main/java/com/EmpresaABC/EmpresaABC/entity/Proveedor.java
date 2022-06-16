/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.EmpresaABC.EmpresaABC.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author juand
 */
@Entity
@Table (name = "Proveedor")



public class Proveedor {
    
   @Id
     @Column(length = 10)
    private Integer documento_pro;
    
    @Column(length = 20)
    private String nombre;
    
    @Column(length = 20)
    private String apellido_pro;
    
    private String email_pro;
    
    private String direccion_pro;
    
    private Integer vehiculos_pro;


    /**
     * @return the name_pro
     */
    public String getNombre() {
        return nombre;
    }

    /**
     * @param nombre the name_pro to set
     */
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    /**
     * @return the apellido_pro
     */
    public String getApellido_pro() {
        return apellido_pro;
    }

    /**
     * @param apellido_pro the apellido_pro to set
     */
    public void setApellido_pro(String apellido_pro) {
        this.apellido_pro = apellido_pro;
    }

    /**
     * @return the documento_pro
     */
    public int getDocumento_pro() {
        return documento_pro;
    }

    /**
     * @param documento_pro the documento_pro to set
     */
    public void setDocumento_pro(int documento_pro) {
        this.documento_pro = documento_pro;
    }

    /**
     * @return the email_pro
     */
    public String getEmail_pro() {
        return email_pro;
    }

    /**
     * @param email_pro the email_pro to set
     */
    public void setEmail_pro(String email_pro) {
        this.email_pro = email_pro;
    }

    /**
     * @return the direccion_pro
     */
    public String getDireccion_pro() {
        return direccion_pro;
    }

    /**
     * @param direccion_pro the direccion_pro to set
     */
    public void setDireccion_pro(String direccion_pro) {
        this.direccion_pro = direccion_pro;
    }

    /**
     * @return the vehiculos_pro
     */
    public int getVehiculos_pro() {
        return vehiculos_pro;
    }

    /**
     * @param vehiculos_pro the vehiculos_pro to set
     */
    public void setVehiculos_pro(int vehiculos_pro) {
        this.vehiculos_pro = vehiculos_pro;
    }
    
    

}
